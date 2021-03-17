package com.example.wbdvsp2101xiangzhangserverjava.controllers;

import com.example.wbdvsp2101xiangzhangserverjava.models.Widget;
import com.example.wbdvsp2101xiangzhangserverjava.services.WidgetService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class WidgetController {
  @Autowired // automatic initialize the service and connect the reference
  WidgetService service;// = new WidgetService();

  @GetMapping("/api/widgets") // api is a convention to indicate this is a data source
  public List<Widget> findAllWidgets() {
    return service.findAllWidgets();
  }

  @GetMapping("/api/widgets/{wid}")
  public Widget findWidgetById(
      @PathVariable("wid") Long id) {
    return service.findWidgetById(id);
  }

  @PostMapping("/api/topics/{tid}/widgets")
  public Widget createWidgetForTopic(
      @PathVariable("tid") String topicId,
      @RequestBody Widget widget) {
    widget.setTopicId(topicId);
    return service.createWidgetForTopic(widget);
  }

  @GetMapping("/api/topics/{tid}/widgets")
  public List<Widget> findWidgetsForTopic(
      @PathVariable("tid") String topicId
  ) {
    return service.findWidgetsForTopic(topicId);
  }

}

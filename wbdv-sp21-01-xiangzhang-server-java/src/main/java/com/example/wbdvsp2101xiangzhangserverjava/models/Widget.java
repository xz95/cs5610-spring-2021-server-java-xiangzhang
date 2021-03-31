package com.example.wbdvsp2101xiangzhangserverjava.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="widgets")
public class Widget {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String name;
  private Integer widgetOrder;
  private String type;
  private String text;
  private Integer size;
  private String url;
  private Integer width, height;
  private String cssClass;
  private String style, value;
  private boolean ordered;
  private String topicId;
  // todo: add all fields


  public Integer getWidgetOrder() {
    return widgetOrder;
  }

  public void setWidgetOrder(Integer widgetOrder) {
    this.widgetOrder = widgetOrder;
  }

  public boolean isOrdered() {
    return ordered;
  }

  public void setOrdered(boolean ordered) {
    this.ordered = ordered;
  }



  public void setTopicId(String topicId) {
    this.topicId = topicId;
  }

  public String getText() {
    return text;
  }

  public Long getId() {
    return id;
  }

  public String getType() {
    return type;
  }

  public Integer getSize() {
    return size;
  }

  public String getTopicId() {
    return topicId;
  }

  public String getName() {
    return name;
  }

  public String getUrl() {
    return url;
  }

  public Integer getWidth() {
    return width;
  }

  public Integer getHeight() {
    return height;
  }

  public String getCssClass() {
    return cssClass;
  }

  public String getStyle() {
    return style;
  }

  public String getValue() {
    return value;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setType(String type) {
    this.type = type;
  }

  public void setText(String text) {
    this.text = text;
  }

  public void setSize(Integer size) {
    this.size = size;
  }

  public void setUrl(String url) {
    this.url = url;
  }

  public void setWidth(Integer width) {
    this.width = width;
  }

  public void setHeight(Integer height) {
    this.height = height;
  }

  public void setCssClass(String cssClass) {
    this.cssClass = cssClass;
  }

  public void setStyle(String style) {
    this.style = style;
  }

  public void setValue(String value) {
    this.value = value;
  }

  public void setAll(Widget newWidget) {
    setCssClass(newWidget.getCssClass());
    setHeight(newWidget.getHeight());
    setText(newWidget.getText());
    setId(newWidget.getId());
    setName(newWidget.getName());
    setSize(newWidget.getSize());
    setStyle(newWidget.getStyle());
    setUrl(newWidget.getUrl());
    setTopicId(newWidget.getTopicId());
    setWidgetOrder(newWidget.getWidgetOrder());
    setWidth(newWidget.getWidth());
    setValue(newWidget.getValue());
    setType(newWidget.getType());
    setOrdered(newWidget.isOrdered());
  }


  public Widget() {

  }

  public Widget(Long id, String topicId, String type, Integer size, String text) {
    this.id = id;
    this.type = type;
    this.size = size;
    this.text = text;
    this.topicId = topicId;
  }

  public void setId(Long id) {
    this.id = id;
  }
}

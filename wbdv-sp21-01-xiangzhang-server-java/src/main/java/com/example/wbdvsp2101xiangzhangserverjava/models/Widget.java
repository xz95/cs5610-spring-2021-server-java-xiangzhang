package com.example.wbdvsp2101xiangzhangserverjava.models;

public class Widget {
  private String name;
  private Long id;
  private String type;
  private Integer widgetOrder;
  private String text;
  private Integer size;
  private String url;
  private Integer width, height;
  private String cssClass;
  private String style, value;

  private String topicId;
  // todo: add all fields

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

  public Integer getWidgetOrder() {
    return widgetOrder;
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

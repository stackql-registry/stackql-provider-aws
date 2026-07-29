--- 
title: monitors
hide_title: false
hide_table_of_contents: false
keywords:
  - monitors
  - internetmonitor
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>monitors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="monitors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.internetmonitor.monitors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_monitor"
    values={[
        { label: 'get_monitor', value: 'get_monitor' },
        { label: 'list_monitors', value: 'list_monitors' }
    ]}
>
<TabItem value="get_monitor">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the monitor was created.</td>
</tr>
<tr>
    <td><CopyableCode code="health_events_config" /></td>
    <td><code>object</code></td>
    <td>A complex type with the configuration information that determines the threshold and other conditions for when Internet Monitor creates a health event for an overall performance or availability issue, across an application's geographies. Defines the percentages, for overall performance scores and availability scores for an application, that are the thresholds for when Amazon CloudWatch Internet Monitor creates a health event. You can override the defaults to set a custom threshold for overall performance or availability scores, or both. You can also set thresholds for local health scores,, where Internet Monitor creates a health event when scores cross a threshold for one or more city-networks, in addition to creating an event when an overall score crosses a threshold. If you don't set a health event threshold, the default value is 95%. For local thresholds, you also set a minimum percentage of overall traffic that is impacted by an issue before Internet Monitor creates an event. In addition, you can disable local thresholds, for performance scores, availability scores, or both. For more information, see Change health event thresholds in the Internet Monitor section of the CloudWatch User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="internet_measurements_log_delivery" /></td>
    <td><code>object</code></td>
    <td>Publish internet measurements to an Amazon S3 bucket in addition to CloudWatch Logs.</td>
</tr>
<tr>
    <td><CopyableCode code="max_city_networks_to_monitor" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of city-networks to monitor for your resources. A city-network is the location (city) where clients access your application resources from and the ASN or network provider, such as an internet service provider (ISP), that clients access the resources through. This limit can help control billing costs. To learn more, see Choosing a city-network maximum value in the Amazon CloudWatch Internet Monitor section of the CloudWatch User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time that the monitor was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="monitor_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the monitor. (pattern: &lt;code&gt;arn:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="monitor_name" /></td>
    <td><code>string</code></td>
    <td>The name of the monitor. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="processing_status" /></td>
    <td><code>string</code></td>
    <td>The health of the data processing for the monitor. (OK, INACTIVE, COLLECTING_DATA, INSUFFICIENT_DATA, FAULT_SERVICE, FAULT_ACCESS_CLOUDWATCH)</td>
</tr>
<tr>
    <td><CopyableCode code="processing_status_info" /></td>
    <td><code>string</code></td>
    <td>Additional information about the health of the data processing for the monitor.</td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>array</code></td>
    <td>The resources monitored by the monitor. Resources are listed by their Amazon Resource Names (ARNs).</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the monitor. (PENDING, ACTIVE, INACTIVE, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags that have been added to monitor.</td>
</tr>
<tr>
    <td><CopyableCode code="traffic_percentage_to_monitor" /></td>
    <td><code>integer</code></td>
    <td>The percentage of the internet-facing traffic for your application to monitor with this monitor. If you set a city-networks maximum, that limit overrides the traffic percentage that you set. To learn more, see Choosing an application traffic percentage to monitor in the Amazon CloudWatch Internet Monitor section of the CloudWatch User Guide.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_monitors">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="monitor_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the monitor. (pattern: &lt;code&gt;arn:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="monitor_name" /></td>
    <td><code>string</code></td>
    <td>The name of the monitor. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="processing_status" /></td>
    <td><code>string</code></td>
    <td>The health of data processing for the monitor. (OK, INACTIVE, COLLECTING_DATA, INSUFFICIENT_DATA, FAULT_SERVICE, FAULT_ACCESS_CLOUDWATCH)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of a monitor. (PENDING, ACTIVE, INACTIVE, ERROR)</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get_monitor"><CopyableCode code="get_monitor" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-monitor_name"><code>monitor_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-LinkedAccountId"><code>LinkedAccountId</code></a></td>
    <td>Gets information about a monitor in Amazon CloudWatch Internet Monitor based on a monitor name. The information returned includes the Amazon Resource Name (ARN), create time, modified time, resources included in the monitor, and status information.</td>
</tr>
<tr>
    <td><a href="#list_monitors"><CopyableCode code="list_monitors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-MonitorStatus"><code>MonitorStatus</code></a>, <a href="#parameter-IncludeLinkedAccounts"><code>IncludeLinkedAccounts</code></a></td>
    <td>Lists all of your monitors for Amazon CloudWatch Internet Monitor and their statuses, along with the Amazon Resource Name (ARN) and name of each monitor.</td>
</tr>
<tr>
    <td><a href="#create_monitor"><CopyableCode code="create_monitor" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MonitorName"><code>MonitorName</code></a></td>
    <td></td>
    <td>Creates a monitor in Amazon CloudWatch Internet Monitor. A monitor is built based on information from the application resources that you add: VPCs, Network Load Balancers (NLBs), Amazon CloudFront distributions, and Amazon WorkSpaces directories. Internet Monitor then publishes internet measurements from Amazon Web Services that are specific to the city-networks. That is, the locations and ASNs (typically internet service providers or ISPs), where clients access your application. For more information, see Using Amazon CloudWatch Internet Monitor in the Amazon CloudWatch User Guide. When you create a monitor, you choose the percentage of traffic that you want to monitor. You can also set a maximum limit for the number of city-networks where client traffic is monitored, that caps the total traffic that Internet Monitor monitors. A city-network maximum is the limit of city-networks, but you only pay for the number of city-networks that are actually monitored. You can update your monitor at any time to change the percentage of traffic to monitor or the city-networks maximum. For more information, see Choosing a city-network maximum value in the Amazon CloudWatch User Guide.</td>
</tr>
<tr>
    <td><a href="#update_monitor"><CopyableCode code="update_monitor" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-monitor_name"><code>monitor_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a monitor. You can update a monitor to change the percentage of traffic to monitor or the maximum number of city-networks (locations and ASNs), to add or remove resources, or to change the status of the monitor. Note that you can't change the name of a monitor. The city-network maximum that you choose is the limit, but you only pay for the number of city-networks that are actually monitored. For more information, see Choosing a city-network maximum value in the Amazon CloudWatch User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_monitor"><CopyableCode code="delete_monitor" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-monitor_name"><code>monitor_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a monitor in Amazon CloudWatch Internet Monitor.</td>
</tr>
<tr>
    <td><a href="#start_query"><CopyableCode code="start_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-monitor_name"><code>monitor_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-StartTime"><code>StartTime</code></a>, <a href="#parameter-EndTime"><code>EndTime</code></a>, <a href="#parameter-QueryType"><code>QueryType</code></a></td>
    <td></td>
    <td>Start a query to return data for a specific query type for the Amazon CloudWatch Internet Monitor query interface. Specify a time period for the data that you want returned by using StartTime and EndTime. You filter the query results to return by providing parameters that you specify with FilterParameters. For more information about using the query interface, including examples, see Using the Amazon CloudWatch Internet Monitor query interface in the Amazon CloudWatch Internet Monitor User Guide.</td>
</tr>
<tr>
    <td><a href="#stop_query"><CopyableCode code="stop_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-monitor_name"><code>monitor_name</code></a>, <a href="#parameter-query_id"><code>query_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stop a query that is progress for a specific monitor.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-monitor_name">
    <td><CopyableCode code="monitor_name" /></td>
    <td><code>string</code></td>
    <td>The name of the monitor.</td>
</tr>
<tr id="parameter-query_id">
    <td><CopyableCode code="query_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the query that you want to stop. A QueryId is an internally-generated identifier for a specific query.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-IncludeLinkedAccounts">
    <td><CopyableCode code="IncludeLinkedAccounts" /></td>
    <td><code>boolean</code></td>
    <td>A boolean option that you can set to TRUE to include monitors for linked accounts in a list of monitors, when you've set up cross-account sharing in Amazon CloudWatch Internet Monitor. You configure cross-account sharing by using Amazon CloudWatch Observability Access Manager. For more information, see Internet Monitor cross-account observability in the Amazon CloudWatch Internet Monitor User Guide.</td>
</tr>
<tr id="parameter-LinkedAccountId">
    <td><CopyableCode code="LinkedAccountId" /></td>
    <td><code>string</code></td>
    <td>The account ID for an account that you've set up cross-account sharing for in Amazon CloudWatch Internet Monitor. You configure cross-account sharing by using Amazon CloudWatch Observability Access Manager. For more information, see Internet Monitor cross-account observability in the Amazon CloudWatch Internet Monitor User Guide.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The number of monitor objects that you want to return with this call.</td>
</tr>
<tr id="parameter-MonitorStatus">
    <td><CopyableCode code="MonitorStatus" /></td>
    <td><code>string</code></td>
    <td>The status of a monitor. This includes the status of the data processing for the monitor and the status of the monitor itself. For information about the statuses for a monitor, see Monitor.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. You receive this token from a previous call.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_monitor"
    values={[
        { label: 'get_monitor', value: 'get_monitor' },
        { label: 'list_monitors', value: 'list_monitors' }
    ]}
>
<TabItem value="get_monitor">

Gets information about a monitor in Amazon CloudWatch Internet Monitor based on a monitor name. The information returned includes the Amazon Resource Name (ARN), create time, modified time, resources included in the monitor, and status information.

```sql
SELECT
created_at,
health_events_config,
internet_measurements_log_delivery,
max_city_networks_to_monitor,
modified_at,
monitor_arn,
monitor_name,
processing_status,
processing_status_info,
resources,
status,
tags,
traffic_percentage_to_monitor
FROM aws.internetmonitor.monitors
WHERE monitor_name = '{{ monitor_name }}' -- required
AND region = '{{ region }}' -- required
AND LinkedAccountId = '{{ LinkedAccountId }}'
;
```
</TabItem>
<TabItem value="list_monitors">

Lists all of your monitors for Amazon CloudWatch Internet Monitor and their statuses, along with the Amazon Resource Name (ARN) and name of each monitor.

```sql
SELECT
monitor_arn,
monitor_name,
processing_status,
status
FROM aws.internetmonitor.monitors
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND MonitorStatus = '{{ MonitorStatus }}'
AND IncludeLinkedAccounts = '{{ IncludeLinkedAccounts }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_monitor"
    values={[
        { label: 'create_monitor', value: 'create_monitor' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_monitor">

Creates a monitor in Amazon CloudWatch Internet Monitor. A monitor is built based on information from the application resources that you add: VPCs, Network Load Balancers (NLBs), Amazon CloudFront distributions, and Amazon WorkSpaces directories. Internet Monitor then publishes internet measurements from Amazon Web Services that are specific to the city-networks. That is, the locations and ASNs (typically internet service providers or ISPs), where clients access your application. For more information, see Using Amazon CloudWatch Internet Monitor in the Amazon CloudWatch User Guide. When you create a monitor, you choose the percentage of traffic that you want to monitor. You can also set a maximum limit for the number of city-networks where client traffic is monitored, that caps the total traffic that Internet Monitor monitors. A city-network maximum is the limit of city-networks, but you only pay for the number of city-networks that are actually monitored. You can update your monitor at any time to change the percentage of traffic to monitor or the city-networks maximum. For more information, see Choosing a city-network maximum value in the Amazon CloudWatch User Guide.

```sql
INSERT INTO aws.internetmonitor.monitors (
MonitorName,
Resources,
ClientToken,
Tags,
MaxCityNetworksToMonitor,
InternetMeasurementsLogDelivery,
TrafficPercentageToMonitor,
HealthEventsConfig,
region
)
SELECT 
'{{ MonitorName }}' /* required */,
'{{ Resources }}',
'{{ ClientToken }}',
'{{ Tags }}',
{{ MaxCityNetworksToMonitor }},
'{{ InternetMeasurementsLogDelivery }}',
{{ TrafficPercentageToMonitor }},
'{{ HealthEventsConfig }}',
'{{ region }}'
RETURNING
arn,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: monitors
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the monitors resource.
    - name: MonitorName
      value: "{{ MonitorName }}"
    - name: Resources
      value:
        - "{{ Resources }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: MaxCityNetworksToMonitor
      value: {{ MaxCityNetworksToMonitor }}
    - name: InternetMeasurementsLogDelivery
      description: |
        Publish internet measurements to an Amazon S3 bucket in addition to CloudWatch Logs.
      value:
        S3Config:
          BucketName: "{{ BucketName }}"
          BucketPrefix: "{{ BucketPrefix }}"
          LogDeliveryStatus: "{{ LogDeliveryStatus }}"
    - name: TrafficPercentageToMonitor
      value: {{ TrafficPercentageToMonitor }}
    - name: HealthEventsConfig
      description: |
        A complex type with the configuration information that determines the threshold and other conditions for when Internet Monitor creates a health event for an overall performance or availability issue, across an application's geographies. Defines the percentages, for overall performance scores and availability scores for an application, that are the thresholds for when Amazon CloudWatch Internet Monitor creates a health event. You can override the defaults to set a custom threshold for overall performance or availability scores, or both. You can also set thresholds for local health scores,, where Internet Monitor creates a health event when scores cross a threshold for one or more city-networks, in addition to creating an event when an overall score crosses a threshold. If you don't set a health event threshold, the default value is 95%. For local thresholds, you also set a minimum percentage of overall traffic that is impacted by an issue before Internet Monitor creates an event. In addition, you can disable local thresholds, for performance scores, availability scores, or both. For more information, see Change health event thresholds in the Internet Monitor section of the CloudWatch User Guide.
      value:
        AvailabilityScoreThreshold: {{ AvailabilityScoreThreshold }}
        PerformanceScoreThreshold: {{ PerformanceScoreThreshold }}
        AvailabilityLocalHealthEventsConfig:
          Status: "{{ Status }}"
          HealthScoreThreshold: {{ HealthScoreThreshold }}
          MinTrafficImpact: {{ MinTrafficImpact }}
        PerformanceLocalHealthEventsConfig:
          Status: "{{ Status }}"
          HealthScoreThreshold: {{ HealthScoreThreshold }}
          MinTrafficImpact: {{ MinTrafficImpact }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_monitor"
    values={[
        { label: 'update_monitor', value: 'update_monitor' }
    ]}
>
<TabItem value="update_monitor">

Updates a monitor. You can update a monitor to change the percentage of traffic to monitor or the maximum number of city-networks (locations and ASNs), to add or remove resources, or to change the status of the monitor. Note that you can't change the name of a monitor. The city-network maximum that you choose is the limit, but you only pay for the number of city-networks that are actually monitored. For more information, see Choosing a city-network maximum value in the Amazon CloudWatch User Guide.

```sql
UPDATE aws.internetmonitor.monitors
SET 
ResourcesToAdd = '{{ ResourcesToAdd }}',
ResourcesToRemove = '{{ ResourcesToRemove }}',
Status = '{{ Status }}',
ClientToken = '{{ ClientToken }}',
MaxCityNetworksToMonitor = {{ MaxCityNetworksToMonitor }},
InternetMeasurementsLogDelivery = '{{ InternetMeasurementsLogDelivery }}',
TrafficPercentageToMonitor = {{ TrafficPercentageToMonitor }},
HealthEventsConfig = '{{ HealthEventsConfig }}'
WHERE 
monitor_name = '{{ monitor_name }}' --required
AND region = '{{ region }}' --required
RETURNING
monitor_arn,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_monitor"
    values={[
        { label: 'delete_monitor', value: 'delete_monitor' }
    ]}
>
<TabItem value="delete_monitor">

Deletes a monitor in Amazon CloudWatch Internet Monitor.

```sql
DELETE FROM aws.internetmonitor.monitors
WHERE monitor_name = '{{ monitor_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_query"
    values={[
        { label: 'start_query', value: 'start_query' },
        { label: 'stop_query', value: 'stop_query' }
    ]}
>
<TabItem value="start_query">

Start a query to return data for a specific query type for the Amazon CloudWatch Internet Monitor query interface. Specify a time period for the data that you want returned by using StartTime and EndTime. You filter the query results to return by providing parameters that you specify with FilterParameters. For more information about using the query interface, including examples, see Using the Amazon CloudWatch Internet Monitor query interface in the Amazon CloudWatch Internet Monitor User Guide.

```sql
EXEC aws.internetmonitor.monitors.start_query 
@monitor_name='{{ monitor_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"StartTime": "{{ StartTime }}", 
"EndTime": "{{ EndTime }}", 
"QueryType": "{{ QueryType }}", 
"FilterParameters": "{{ FilterParameters }}", 
"LinkedAccountId": "{{ LinkedAccountId }}"
}'
;
```
</TabItem>
<TabItem value="stop_query">

Stop a query that is progress for a specific monitor.

```sql
EXEC aws.internetmonitor.monitors.stop_query 
@monitor_name='{{ monitor_name }}' --required, 
@query_id='{{ query_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>

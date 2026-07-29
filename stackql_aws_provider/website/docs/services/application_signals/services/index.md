--- 
title: services
hide_title: false
hide_table_of_contents: false
keywords:
  - services
  - application_signals
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

Creates, updates, deletes, gets or lists a <code>services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.application_signals.services" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_service"
    values={[
        { label: 'get_service', value: 'get_service' },
        { label: 'list_services', value: 'list_services' }
    ]}
>
<TabItem value="get_service">

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
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end time of the data included in the response. In a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: 1698778057. This displays the time that Application Signals used for the request. It might not match your request exactly, because it was rounded to the nearest hour.</td>
</tr>
<tr>
    <td><CopyableCode code="log_group_references" /></td>
    <td><code>array</code></td>
    <td>An array of string-to-string maps that each contain information about one log group associated with this service. Each string-to-string map includes the following fields: "Type": "AWS::Resource" "ResourceType": "AWS::Logs::LogGroup" "Identifier": "name-of-log-group"</td>
</tr>
<tr>
    <td><CopyableCode code="service" /></td>
    <td><code>object</code></td>
    <td>A structure containing information about the service.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start time of the data included in the response. In a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: 1698778057. This displays the time that Application Signals used for the request. It might not match your request exactly, because it was rounded to the nearest hour.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_services">

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
    <td><CopyableCode code="attribute_maps" /></td>
    <td><code>array</code></td>
    <td>This structure contains one or more string-to-string maps that help identify this service. It can include platform attributes, application attributes, and telemetry attributes. Platform attributes contain information the service's platform. PlatformType defines the hosted-in platform. EKS.Cluster is the name of the Amazon EKS cluster. K8s.Cluster is the name of the self-hosted Kubernetes cluster. K8s.Namespace is the name of the Kubernetes namespace in either Amazon EKS or Kubernetes clusters. K8s.Workload is the name of the Kubernetes workload in either Amazon EKS or Kubernetes clusters. K8s.Node is the name of the Kubernetes node in either Amazon EKS or Kubernetes clusters. K8s.Pod is the name of the Kubernetes pod in either Amazon EKS or Kubernetes clusters. EC2.AutoScalingGroup is the name of the Amazon EC2 Auto Scaling group. EC2.InstanceId is the ID of the Amazon EC2 instance. Host is the name of the host, for all platform types. Application attributes contain information about the application. AWS.Application is the application's name in Amazon Web Services Service Catalog AppRegistry. AWS.Application.ARN is the application's ARN in Amazon Web Services Service Catalog AppRegistry. Telemetry attributes contain telemetry information. Telemetry.SDK is the fingerprint of the OpenTelemetry SDK version for instrumented services. Telemetry.Agent is the fingerprint of the agent used to collect and send telemetry data. Telemetry.Source Specifies the point of application where the telemetry was collected or specifies what was used for the source of telemetry data.</td>
</tr>
<tr>
    <td><CopyableCode code="key_attributes" /></td>
    <td><code>object</code></td>
    <td>This is a string-to-string map that help identify the objects discovered by Application Signals. It can include the following fields. Type designates the type of object this is. ResourceType specifies the type of the resource. This field is used only when the value of the Type field is Resource or AWS::Resource. Name specifies the name of the object. This is used only if the value of the Type field is Service, RemoteService, or AWS::Service. Identifier identifies the resource objects of this resource. This is used only if the value of the Type field is Resource or AWS::Resource. Environment specifies the location where this object is hosted, or what it belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="metric_references" /></td>
    <td><code>array</code></td>
    <td>An array of structures that each contain information about one metric associated with this service.</td>
</tr>
<tr>
    <td><CopyableCode code="service_groups" /></td>
    <td><code>array</code></td>
    <td>An array of service groups that this service belongs to, based on the configured grouping attributes.</td>
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
    <td><a href="#get_service"><CopyableCode code="get_service" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-StartTime"><code>StartTime</code></a>, <a href="#parameter-EndTime"><code>EndTime</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a service discovered by Application Signals.</td>
</tr>
<tr>
    <td><a href="#list_services"><CopyableCode code="list_services" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-StartTime"><code>StartTime</code></a>, <a href="#parameter-EndTime"><code>EndTime</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-IncludeLinkedAccounts"><code>IncludeLinkedAccounts</code></a>, <a href="#parameter-AwsAccountId"><code>AwsAccountId</code></a></td>
    <td>Returns a list of services that have been discovered by Application Signals. A service represents a minimum logical and transactional unit that completes a business function. Services are discovered through Application Signals instrumentation.</td>
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
<tr id="parameter-EndTime">
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end of the time period to retrieve information about. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: 1698778057 Your requested start time will be rounded to the nearest hour.</td>
</tr>
<tr id="parameter-StartTime">
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start of the time period to retrieve information about. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: 1698778057 Your requested start time will be rounded to the nearest hour.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AwsAccountId">
    <td><CopyableCode code="AwsAccountId" /></td>
    <td><code>string</code></td>
    <td>Amazon Web Services Account ID.</td>
</tr>
<tr id="parameter-IncludeLinkedAccounts">
    <td><CopyableCode code="IncludeLinkedAccounts" /></td>
    <td><code>boolean</code></td>
    <td>If you are using this operation in a monitoring account, specify true to include services from source accounts in the returned data.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in one operation. If you omit this parameter, the default of 50 is used.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>Include this value, if it was returned by the previous operation, to get the next set of services.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_service"
    values={[
        { label: 'get_service', value: 'get_service' },
        { label: 'list_services', value: 'list_services' }
    ]}
>
<TabItem value="get_service">

Returns information about a service discovered by Application Signals.

```sql
SELECT
end_time,
log_group_references,
service,
start_time
FROM aws.application_signals.services
WHERE StartTime = '{{ StartTime }}' -- required
AND EndTime = '{{ EndTime }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_services">

Returns a list of services that have been discovered by Application Signals. A service represents a minimum logical and transactional unit that completes a business function. Services are discovered through Application Signals instrumentation.

```sql
SELECT
attribute_maps,
key_attributes,
metric_references,
service_groups
FROM aws.application_signals.services
WHERE StartTime = '{{ StartTime }}' -- required
AND EndTime = '{{ EndTime }}' -- required
AND region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND IncludeLinkedAccounts = '{{ IncludeLinkedAccounts }}'
AND AwsAccountId = '{{ AwsAccountId }}'
;
```
</TabItem>
</Tabs>

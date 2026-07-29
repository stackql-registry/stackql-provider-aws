--- 
title: service_dependents
hide_title: false
hide_table_of_contents: false
keywords:
  - service_dependents
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

Creates, updates, deletes, gets or lists a <code>service_dependents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_dependents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.application_signals.service_dependents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_service_dependents"
    values={[
        { label: 'list_service_dependents', value: 'list_service_dependents' }
    ]}
>
<TabItem value="list_service_dependents">

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
    <td><CopyableCode code="dependent_key_attributes" /></td>
    <td><code>object</code></td>
    <td>This is a string-to-string map. It can include the following fields. Type designates the type of object this is. ResourceType specifies the type of the resource. This field is used only when the value of the Type field is Resource or AWS::Resource. Name specifies the name of the object. This is used only if the value of the Type field is Service, RemoteService, or AWS::Service. Identifier identifies the resource objects of this resource. This is used only if the value of the Type field is Resource or AWS::Resource. Environment specifies the location where this object is hosted, or what it belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="dependent_operation_name" /></td>
    <td><code>string</code></td>
    <td>If the dependent invoker was a service that invoked it from an operation, the name of that dependent operation is displayed here.</td>
</tr>
<tr>
    <td><CopyableCode code="metric_references" /></td>
    <td><code>array</code></td>
    <td>An array of structures that each contain information about one metric associated with this service dependent that was discovered by Application Signals.</td>
</tr>
<tr>
    <td><CopyableCode code="operation_name" /></td>
    <td><code>string</code></td>
    <td>If the invoked entity is an operation on an entity, the name of that dependent operation is displayed here.</td>
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
    <td><a href="#list_service_dependents"><CopyableCode code="list_service_dependents" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-StartTime"><code>StartTime</code></a>, <a href="#parameter-EndTime"><code>EndTime</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Returns the list of dependents that invoked the specified service during the provided time range. Dependents include other services, CloudWatch Synthetics canaries, and clients that are instrumented with CloudWatch RUM app monitors.</td>
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
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in one operation. If you omit this parameter, the default of 50 is used.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>Include this value, if it was returned by the previous operation, to get the next set of service dependents.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_service_dependents"
    values={[
        { label: 'list_service_dependents', value: 'list_service_dependents' }
    ]}
>
<TabItem value="list_service_dependents">

Returns the list of dependents that invoked the specified service during the provided time range. Dependents include other services, CloudWatch Synthetics canaries, and clients that are instrumented with CloudWatch RUM app monitors.

```sql
SELECT
dependent_key_attributes,
dependent_operation_name,
metric_references,
operation_name
FROM aws.application_signals.service_dependents
WHERE StartTime = '{{ StartTime }}' -- required
AND EndTime = '{{ EndTime }}' -- required
AND region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>

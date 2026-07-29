--- 
title: container_logs
hide_title: false
hide_table_of_contents: false
keywords:
  - container_logs
  - lightsail
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

Creates, updates, deletes, gets or lists a <code>container_logs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="container_logs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.container_logs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_container_log"
    values={[
        { label: 'get_container_log', value: 'get_container_log' }
    ]}
>
<TabItem value="get_container_log">

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
    <td><CopyableCode code="log_events" /></td>
    <td><code>array</code></td>
    <td>An array of objects that describe the log events of a container.</td>
</tr>
<tr>
    <td><CopyableCode code="next_page_token" /></td>
    <td><code>string</code></td>
    <td>The token to advance to the next page of results from your request. A next page token is not returned if there are no more results to display. To get the next page of results, perform another GetContainerLog request and specify the next page token using the pageToken parameter.</td>
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
    <td><a href="#get_container_log"><CopyableCode code="get_container_log" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the log events of a container of your Amazon Lightsail container service. If your container service has more than one node (i.e., a scale greater than 1), then the log events that are returned for the specified container are merged from all nodes on your container service. Container logs are retained for a certain amount of time. For more information, see Amazon Lightsail endpoints and quotas in the Amazon Web Services General Reference.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_container_log"
    values={[
        { label: 'get_container_log', value: 'get_container_log' }
    ]}
>
<TabItem value="get_container_log">

Returns the log events of a container of your Amazon Lightsail container service. If your container service has more than one node (i.e., a scale greater than 1), then the log events that are returned for the specified container are merged from all nodes on your container service. Container logs are retained for a certain amount of time. For more information, see Amazon Lightsail endpoints and quotas in the Amazon Web Services General Reference.

```sql
SELECT
log_events,
next_page_token
FROM aws.lightsail.container_logs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>

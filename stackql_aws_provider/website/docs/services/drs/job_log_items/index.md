--- 
title: job_log_items
hide_title: false
hide_table_of_contents: false
keywords:
  - job_log_items
  - drs
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

Creates, updates, deletes, gets or lists a <code>job_log_items</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="job_log_items" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.drs.job_log_items" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_job_log_items"
    values={[
        { label: 'describe_job_log_items', value: 'describe_job_log_items' }
    ]}
>
<TabItem value="describe_job_log_items">

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
    <td><CopyableCode code="event" /></td>
    <td><code>string</code></td>
    <td>The event represents the type of a log. (JOB_START, SERVER_SKIPPED, CLEANUP_START, CLEANUP_END, CLEANUP_FAIL, SNAPSHOT_START, SNAPSHOT_END, SNAPSHOT_FAIL, USING_PREVIOUS_SNAPSHOT, USING_PREVIOUS_SNAPSHOT_FAILED, CONVERSION_START, CONVERSION_END, CONVERSION_FAIL, LAUNCH_START, LAUNCH_FAILED, JOB_CANCEL, JOB_END, DEPLOY_NETWORK_CONFIGURATION_START, DEPLOY_NETWORK_CONFIGURATION_END, DEPLOY_NETWORK_CONFIGURATION_FAILED, UPDATE_NETWORK_CONFIGURATION_START, UPDATE_NETWORK_CONFIGURATION_END, UPDATE_NETWORK_CONFIGURATION_FAILED, UPDATE_LAUNCH_TEMPLATE_START, UPDATE_LAUNCH_TEMPLATE_END, UPDATE_LAUNCH_TEMPLATE_FAILED, NETWORK_RECOVERY_FAIL)</td>
</tr>
<tr>
    <td><CopyableCode code="event_data" /></td>
    <td><code>object</code></td>
    <td>Metadata associated with a Job log.</td>
</tr>
<tr>
    <td><CopyableCode code="log_date_time" /></td>
    <td><code>string</code></td>
    <td>The date and time the log was taken. (pattern: &lt;code&gt;&#91;1-9&#93;&#91;0-9&#93;*-(0&#91;1-9&#93;|1&#91;0-2&#93;)-(0&#91;1-9&#93;|&#91;12&#93;&#91;0-9&#93;|3&#91;01&#93;)T(&#91;0-1&#93;&#91;0-9&#93;|2&#91;0-3&#93;):&#91;0-5&#93;&#91;0-9&#93;:&#91;0-5&#93;&#91;0-9&#93;(\.&#91;0-9&#93;+)?Z&lt;/code&gt;)</td>
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
    <td><a href="#describe_job_log_items"><CopyableCode code="describe_job_log_items" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a detailed Job log with pagination.</td>
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
    defaultValue="describe_job_log_items"
    values={[
        { label: 'describe_job_log_items', value: 'describe_job_log_items' }
    ]}
>
<TabItem value="describe_job_log_items">

Retrieves a detailed Job log with pagination.

```sql
SELECT
event,
event_data,
log_date_time
FROM aws.drs.job_log_items
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>

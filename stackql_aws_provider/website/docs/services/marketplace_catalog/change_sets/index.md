--- 
title: change_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - change_sets
  - marketplace_catalog
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

Creates, updates, deletes, gets or lists a <code>change_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="change_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.marketplace_catalog.change_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_change_set"
    values={[
        { label: 'describe_change_set', value: 'describe_change_set' },
        { label: 'list_change_sets', value: 'list_change_sets' }
    ]}
>
<TabItem value="describe_change_set">

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
    <td><CopyableCode code="change_set" /></td>
    <td><code>array</code></td>
    <td>An array of ChangeSummary objects.</td>
</tr>
<tr>
    <td><CopyableCode code="change_set_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN associated with the unique identifier for the change set referenced in this request. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9:*/-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="change_set_id" /></td>
    <td><code>string</code></td>
    <td>Required. The unique identifier for the change set referenced in this request. (pattern: &lt;code&gt;^&#91;\w\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="change_set_name" /></td>
    <td><code>string</code></td>
    <td>The optional name provided in the StartChangeSet request. If you do not provide a name, one is set by default. (pattern: &lt;code&gt;^&#91;\w\s+=.:@-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string</code></td>
    <td>The date and time, in ISO 8601 format (2018-02-27T13:45:22Z), the request transitioned to a terminal state. The change cannot transition to a different state. Null if the request is not in a terminal state. (pattern: &lt;code&gt;^(&#91;\d&#93;&#123;4&#125;)\-(1&#91;0-2&#93;|0&#91;1-9&#93;)\-(3&#91;01&#93;|0&#91;1-9&#93;|&#91;12&#93;&#91;\d&#93;)T(2&#91;0-3&#93;|&#91;01&#93;&#91;\d&#93;):(&#91;0-5&#93;&#91;\d&#93;):(&#91;0-5&#93;&#91;\d&#93;)Z$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_code" /></td>
    <td><code>string</code></td>
    <td>Returned if the change set is in FAILED status. Can be either CLIENT_ERROR, which means that there are issues with the request (see the ErrorDetailList), or SERVER_FAULT, which means that there is a problem in the system, and you should retry your request. (CLIENT_ERROR, SERVER_FAULT)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_description" /></td>
    <td><code>string</code></td>
    <td>Returned if there is a failure on the change set, but that failure is not related to any of the changes in the request. (pattern: &lt;code&gt;^(.)+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="intent" /></td>
    <td><code>string</code></td>
    <td>The optional intent provided in the StartChangeSet request. If you do not provide an intent, APPLY is set by default. (VALIDATE, APPLY)</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string</code></td>
    <td>The date and time, in ISO 8601 format (2018-02-27T13:45:22Z), the request started. (pattern: &lt;code&gt;^(&#91;\d&#93;&#123;4&#125;)\-(1&#91;0-2&#93;|0&#91;1-9&#93;)\-(3&#91;01&#93;|0&#91;1-9&#93;|&#91;12&#93;&#91;\d&#93;)T(2&#91;0-3&#93;|&#91;01&#93;&#91;\d&#93;):(&#91;0-5&#93;&#91;\d&#93;):(&#91;0-5&#93;&#91;\d&#93;)Z$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the change request. (PREPARING, APPLYING, SUCCEEDED, CANCELLED, FAILED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_change_sets">

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
    <td><CopyableCode code="change_set_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN associated with the unique identifier for the change set referenced in this request. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9:*/-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="change_set_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for a change set. (pattern: &lt;code&gt;^&#91;\w\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="change_set_name" /></td>
    <td><code>string</code></td>
    <td>The non-unique name for the change set. (pattern: &lt;code&gt;^&#91;\w\s+=.:@-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string</code></td>
    <td>The time, in ISO 8601 format (2018-02-27T13:45:22Z), when the change set was finished. (pattern: &lt;code&gt;^(&#91;\d&#93;&#123;4&#125;)\-(1&#91;0-2&#93;|0&#91;1-9&#93;)\-(3&#91;01&#93;|0&#91;1-9&#93;|&#91;12&#93;&#91;\d&#93;)T(2&#91;0-3&#93;|&#91;01&#93;&#91;\d&#93;):(&#91;0-5&#93;&#91;\d&#93;):(&#91;0-5&#93;&#91;\d&#93;)Z$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="entity_id_list" /></td>
    <td><code>array</code></td>
    <td>This object is a list of entity IDs (string) that are a part of a change set. The entity ID list is a maximum of 20 entities. It must contain at least one entity.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_code" /></td>
    <td><code>string</code></td>
    <td>Returned if the change set is in FAILED status. Can be either CLIENT_ERROR, which means that there are issues with the request (see the ErrorDetailList of DescribeChangeSet), or SERVER_FAULT, which means that there is a problem in the system, and you should retry your request. (CLIENT_ERROR, SERVER_FAULT)</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string</code></td>
    <td>The time, in ISO 8601 format (2018-02-27T13:45:22Z), when the change set was started. (pattern: &lt;code&gt;^(&#91;\d&#93;&#123;4&#125;)\-(1&#91;0-2&#93;|0&#91;1-9&#93;)\-(3&#91;01&#93;|0&#91;1-9&#93;|&#91;12&#93;&#91;\d&#93;)T(2&#91;0-3&#93;|&#91;01&#93;&#91;\d&#93;):(&#91;0-5&#93;&#91;\d&#93;):(&#91;0-5&#93;&#91;\d&#93;)Z$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the change set. (PREPARING, APPLYING, SUCCEEDED, CANCELLED, FAILED)</td>
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
    <td><a href="#describe_change_set"><CopyableCode code="describe_change_set" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-catalog"><code>catalog</code></a>, <a href="#parameter-changeSetId"><code>changeSetId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides information about a given change set.</td>
</tr>
<tr>
    <td><a href="#list_change_sets"><CopyableCode code="list_change_sets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the list of change sets owned by the account being used to make the call. You can filter this list by providing any combination of entityId, ChangeSetName, and status. If you provide more than one filter, the API operation applies a logical AND between the filters. You can describe a change during the 60-day request history retention period for API calls.</td>
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
<tr id="parameter-catalog">
    <td><CopyableCode code="catalog" /></td>
    <td><code>string</code></td>
    <td>Required. The catalog related to the request. Fixed value: AWSMarketplace</td>
</tr>
<tr id="parameter-changeSetId">
    <td><CopyableCode code="changeSetId" /></td>
    <td><code>string</code></td>
    <td>Required. The unique identifier for the StartChangeSet request that you want to describe the details for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_change_set"
    values={[
        { label: 'describe_change_set', value: 'describe_change_set' },
        { label: 'list_change_sets', value: 'list_change_sets' }
    ]}
>
<TabItem value="describe_change_set">

Provides information about a given change set.

```sql
SELECT
change_set,
change_set_arn,
change_set_id,
change_set_name,
end_time,
failure_code,
failure_description,
intent,
start_time,
status
FROM aws.marketplace_catalog.change_sets
WHERE catalog = '{{ catalog }}' -- required
AND changeSetId = '{{ changeSetId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_change_sets">

Returns the list of change sets owned by the account being used to make the call. You can filter this list by providing any combination of entityId, ChangeSetName, and status. If you provide more than one filter, the API operation applies a logical AND between the filters. You can describe a change during the 60-day request history retention period for API calls.

```sql
SELECT
change_set_arn,
change_set_id,
change_set_name,
end_time,
entity_id_list,
failure_code,
start_time,
status
FROM aws.marketplace_catalog.change_sets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>

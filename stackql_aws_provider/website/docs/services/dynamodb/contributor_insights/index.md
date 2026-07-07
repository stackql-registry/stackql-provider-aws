--- 
title: contributor_insights
hide_title: false
hide_table_of_contents: false
keywords:
  - contributor_insights
  - dynamodb
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

Creates, updates, deletes, gets or lists a <code>contributor_insights</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="contributor_insights" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dynamodb.contributor_insights" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_contributor_insights"
    values={[
        { label: 'describe_contributor_insights', value: 'describe_contributor_insights' },
        { label: 'list_contributor_insights', value: 'list_contributor_insights' }
    ]}
>
<TabItem value="describe_contributor_insights">

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
    <td><CopyableCode code="ContributorInsightsMode" /></td>
    <td><code>string</code></td>
    <td>The mode of CloudWatch Contributor Insights for DynamoDB that determines which events are emitted. Can be set to track all access and throttled events or throttled events only. (ACCESSED_AND_THROTTLED_KEYS, THROTTLED_KEYS)</td>
</tr>
<tr>
    <td><CopyableCode code="ContributorInsightsRuleList" /></td>
    <td><code>array</code></td>
    <td>List of names of the associated contributor insights rules.</td>
</tr>
<tr>
    <td><CopyableCode code="ContributorInsightsStatus" /></td>
    <td><code>string</code></td>
    <td>Current status of contributor insights. (ENABLING, ENABLED, DISABLING, DISABLED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="FailureException" /></td>
    <td><code>object</code></td>
    <td>Returns information about the last failure that was encountered. The most common exceptions for a FAILED status are: LimitExceededException - Per-account Amazon CloudWatch Contributor Insights rule limit reached. Please disable Contributor Insights for other tables/indexes OR disable Contributor Insights rules before retrying. AccessDeniedException - Amazon CloudWatch Contributor Insights rules cannot be modified due to insufficient permissions. AccessDeniedException - Failed to create service-linked role for Contributor Insights due to insufficient permissions. InternalServerError - Failed to create Amazon CloudWatch Contributor Insights rules. Please retry request.</td>
</tr>
<tr>
    <td><CopyableCode code="IndexName" /></td>
    <td><code>string</code></td>
    <td>The name of the global secondary index being described. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdateDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp of the last time the status was changed.</td>
</tr>
<tr>
    <td><CopyableCode code="TableName" /></td>
    <td><code>string</code></td>
    <td>The name of the table being described. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_contributor_insights">

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
    <td><CopyableCode code="ContributorInsightsSummaries" /></td>
    <td><code>array</code></td>
    <td>A list of ContributorInsightsSummary.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token to go to the next page if there is one.</td>
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
    <td><a href="#describe_contributor_insights"><CopyableCode code="describe_contributor_insights" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about contributor insights for a given table or global secondary index.</td>
</tr>
<tr>
    <td><a href="#list_contributor_insights"><CopyableCode code="list_contributor_insights" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of ContributorInsightsSummary for a table and all its global secondary indexes.</td>
</tr>
<tr>
    <td><a href="#update_contributor_insights"><CopyableCode code="update_contributor_insights" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TableName"><code>TableName</code></a>, <a href="#parameter-ContributorInsightsAction"><code>ContributorInsightsAction</code></a></td>
    <td></td>
    <td>Updates the status for contributor insights for a specific table or index. CloudWatch Contributor Insights for DynamoDB graphs display the partition key and (if applicable) sort key of frequently accessed items and frequently throttled items in plaintext. If you require the use of Amazon Web Services Key Management Service (KMS) to encrypt this table’s partition key and sort key data with an Amazon Web Services managed key or customer managed key, you should not enable CloudWatch Contributor Insights for DynamoDB for this table.</td>
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
    defaultValue="describe_contributor_insights"
    values={[
        { label: 'describe_contributor_insights', value: 'describe_contributor_insights' },
        { label: 'list_contributor_insights', value: 'list_contributor_insights' }
    ]}
>
<TabItem value="describe_contributor_insights">

Returns information about contributor insights for a given table or global secondary index.

```sql
SELECT
ContributorInsightsMode,
ContributorInsightsRuleList,
ContributorInsightsStatus,
FailureException,
IndexName,
LastUpdateDateTime,
TableName
FROM aws.dynamodb.contributor_insights
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_contributor_insights">

Returns a list of ContributorInsightsSummary for a table and all its global secondary indexes.

```sql
SELECT
ContributorInsightsSummaries,
NextToken
FROM aws.dynamodb.contributor_insights
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_contributor_insights"
    values={[
        { label: 'update_contributor_insights', value: 'update_contributor_insights' }
    ]}
>
<TabItem value="update_contributor_insights">

Updates the status for contributor insights for a specific table or index. CloudWatch Contributor Insights for DynamoDB graphs display the partition key and (if applicable) sort key of frequently accessed items and frequently throttled items in plaintext. If you require the use of Amazon Web Services Key Management Service (KMS) to encrypt this table’s partition key and sort key data with an Amazon Web Services managed key or customer managed key, you should not enable CloudWatch Contributor Insights for DynamoDB for this table.

```sql
UPDATE aws.dynamodb.contributor_insights
SET 
TableName = '{{ TableName }}',
IndexName = '{{ IndexName }}',
ContributorInsightsAction = '{{ ContributorInsightsAction }}',
ContributorInsightsMode = '{{ ContributorInsightsMode }}'
WHERE 
region = '{{ region }}' --required
AND TableName = '{{ TableName }}' --required
AND ContributorInsightsAction = '{{ ContributorInsightsAction }}' --required
RETURNING
ContributorInsightsMode,
ContributorInsightsStatus,
IndexName,
TableName;
```
</TabItem>
</Tabs>

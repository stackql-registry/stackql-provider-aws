--- 
title: query_suggestions_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - query_suggestions_configs
  - kendra
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

Creates, updates, deletes, gets or lists a <code>query_suggestions_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="query_suggestions_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kendra.query_suggestions_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_query_suggestions_config"
    values={[
        { label: 'describe_query_suggestions_config', value: 'describe_query_suggestions_config' }
    ]}
>
<TabItem value="describe_query_suggestions_config">

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
    <td><CopyableCode code="AttributeSuggestionsConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration information for the document fields/attributes that you want to base query suggestions on.</td>
</tr>
<tr>
    <td><CopyableCode code="IncludeQueriesWithoutUserInformation" /></td>
    <td><code>boolean</code></td>
    <td>TRUE to use all queries, otherwise use only queries that include user information to generate the query suggestions.</td>
</tr>
<tr>
    <td><CopyableCode code="LastClearTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp when query suggestions for an index was last cleared. After you clear suggestions, Amazon Kendra learns new suggestions based on new queries added to the query log from the time you cleared suggestions. Amazon Kendra only considers re-occurences of a query from the time you cleared suggestions.</td>
</tr>
<tr>
    <td><CopyableCode code="LastSuggestionsBuildTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp when query suggestions for an index was last updated. Amazon Kendra automatically updates suggestions every 24 hours, after you change a setting or after you apply a block list.</td>
</tr>
<tr>
    <td><CopyableCode code="MinimumNumberOfQueryingUsers" /></td>
    <td><code>integer</code></td>
    <td>The minimum number of unique users who must search a query in order for the query to be eligible to suggest to your users.</td>
</tr>
<tr>
    <td><CopyableCode code="MinimumQueryCount" /></td>
    <td><code>integer</code></td>
    <td>The minimum number of times a query must be searched in order for the query to be eligible to suggest to your users.</td>
</tr>
<tr>
    <td><CopyableCode code="Mode" /></td>
    <td><code>string</code></td>
    <td>Whether query suggestions are currently in ENABLED mode or LEARN_ONLY mode. By default, Amazon Kendra enables query suggestions.LEARN_ONLY turns off query suggestions for your users. You can change the mode using the UpdateQuerySuggestionsConfig API. (ENABLED, LEARN_ONLY)</td>
</tr>
<tr>
    <td><CopyableCode code="QueryLogLookBackWindowInDays" /></td>
    <td><code>integer</code></td>
    <td>How recent your queries are in your query log time window (in days).</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Whether the status of query suggestions settings is currently ACTIVE or UPDATING. Active means the current settings apply and Updating means your changed settings are in the process of applying. (ACTIVE, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="TotalSuggestionsCount" /></td>
    <td><code>integer</code></td>
    <td>The current total count of query suggestions for an index. This count can change when you update your query suggestions settings, if you filter out certain queries from suggestions using a block list, and as the query log accumulates more queries for Amazon Kendra to learn from. If the count is much lower than you expected, it could be because Amazon Kendra needs more queries in the query history to learn from or your current query suggestions settings are too strict.</td>
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
    <td><a href="#describe_query_suggestions_config"><CopyableCode code="describe_query_suggestions_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information on the settings of query suggestions for an index. This is used to check the current settings applied to query suggestions. DescribeQuerySuggestionsConfig is currently not supported in the Amazon Web Services GovCloud (US-West) region.</td>
</tr>
<tr>
    <td><a href="#update_query_suggestions_config"><CopyableCode code="update_query_suggestions_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IndexId"><code>IndexId</code></a></td>
    <td></td>
    <td>Updates the settings of query suggestions for an index. Amazon Kendra supports partial updates, so you only need to provide the fields you want to update. If an update is currently processing, you need to wait for the update to finish before making another update. Updates to query suggestions settings might not take effect right away. The time for your updated settings to take effect depends on the updates made and the number of search queries in your index. You can still enable/disable query suggestions at any time. UpdateQuerySuggestionsConfig is currently not supported in the Amazon Web Services GovCloud (US-West) region.</td>
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
    defaultValue="describe_query_suggestions_config"
    values={[
        { label: 'describe_query_suggestions_config', value: 'describe_query_suggestions_config' }
    ]}
>
<TabItem value="describe_query_suggestions_config">

Gets information on the settings of query suggestions for an index. This is used to check the current settings applied to query suggestions. DescribeQuerySuggestionsConfig is currently not supported in the Amazon Web Services GovCloud (US-West) region.

```sql
SELECT
AttributeSuggestionsConfig,
IncludeQueriesWithoutUserInformation,
LastClearTime,
LastSuggestionsBuildTime,
MinimumNumberOfQueryingUsers,
MinimumQueryCount,
Mode,
QueryLogLookBackWindowInDays,
Status,
TotalSuggestionsCount
FROM aws.kendra.query_suggestions_configs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_query_suggestions_config"
    values={[
        { label: 'update_query_suggestions_config', value: 'update_query_suggestions_config' }
    ]}
>
<TabItem value="update_query_suggestions_config">

Updates the settings of query suggestions for an index. Amazon Kendra supports partial updates, so you only need to provide the fields you want to update. If an update is currently processing, you need to wait for the update to finish before making another update. Updates to query suggestions settings might not take effect right away. The time for your updated settings to take effect depends on the updates made and the number of search queries in your index. You can still enable/disable query suggestions at any time. UpdateQuerySuggestionsConfig is currently not supported in the Amazon Web Services GovCloud (US-West) region.

```sql
UPDATE aws.kendra.query_suggestions_configs
SET 
IndexId = '{{ IndexId }}',
Mode = '{{ Mode }}',
QueryLogLookBackWindowInDays = {{ QueryLogLookBackWindowInDays }},
IncludeQueriesWithoutUserInformation = {{ IncludeQueriesWithoutUserInformation }},
MinimumNumberOfQueryingUsers = {{ MinimumNumberOfQueryingUsers }},
MinimumQueryCount = {{ MinimumQueryCount }},
AttributeSuggestionsConfig = '{{ AttributeSuggestionsConfig }}'
WHERE 
region = '{{ region }}' --required
AND IndexId = '{{ IndexId }}' --required;
```
</TabItem>
</Tabs>

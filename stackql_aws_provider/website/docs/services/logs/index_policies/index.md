--- 
title: index_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - index_policies
  - logs
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

Creates, updates, deletes, gets or lists an <code>index_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="index_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.logs.index_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_index_policies"
    values={[
        { label: 'describe_index_policies', value: 'describe_index_policies' }
    ]}
>
<TabItem value="describe_index_policies">

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
    <td><CopyableCode code="index_policies" /></td>
    <td><code>array</code></td>
    <td>An array containing the field index policies.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of items to return. The token expires after 24 hours.</td>
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
    <td><a href="#describe_index_policies"><CopyableCode code="describe_index_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the field index policies of the specified log group. For more information about field index policies, see PutIndexPolicy. If a specified log group has a log-group level index policy, that policy is returned by this operation. If a specified log group doesn't have a log-group level index policy, but an account-wide index policy applies to it, that account-wide policy is returned by this operation. To find information about only account-level policies, use DescribeAccountPolicies instead.</td>
</tr>
<tr>
    <td><a href="#put_index_policy"><CopyableCode code="put_index_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-logGroupIdentifier"><code>logGroupIdentifier</code></a>, <a href="#parameter-policyDocument"><code>policyDocument</code></a></td>
    <td></td>
    <td>Creates or updates a field index policy for the specified log group. Only log groups in the Standard log class support field index policies. For more information about log classes, see Log classes. You can use field index policies to create field indexes on fields found in log events in the log group. Creating field indexes speeds up and lowers the costs for CloudWatch Logs Insights queries that reference those field indexes, because these queries attempt to skip the processing of log events that are known to not match the indexed field. Good fields to index are fields that you often need to query for and fields or values that match only a small fraction of the total log events. Common examples of indexes include request ID, session ID, userID, and instance IDs. For more information, see Create field indexes to improve query performance and reduce costs. You can configure indexed fields as facets to enable interactive exploration and filtering of your logs in the CloudWatch Logs Insights console. Facets allow you to view value distributions and counts for indexed fields without running queries. When you create a field index, you can optionally set it as a facet to enable this interactive analysis capability. For more information, see Use facets to group and explore logs. To find the fields that are in your log group events, use the GetLogGroupFields operation. For example, suppose you have created a field index for requestId. Then, any CloudWatch Logs Insights query on that log group that includes requestId = value or requestId IN &#91;value, value, ...&#93; will process fewer log events to reduce costs, and have improved performance. CloudWatch Logs provides default field indexes for all log groups in the Standard log class. Default field indexes are automatically available for the following fields: @logStream @aws.region @aws.account @source.log traceId Default field indexes are in addition to any custom field indexes you define within your policy. Default field indexes are not counted towards your field index quota. Each index policy has the following quotas and restrictions: As many as 20 fields can be included in the policy. Each field name can include as many as 100 characters. Matches of log events to the names of indexed fields are case-sensitive. For example, a field index of RequestId won't match a log event containing requestId. Log group-level field index policies created with PutIndexPolicy override account-level field index policies created with PutAccountPolicy that apply to log groups. If you use PutIndexPolicy to create a field index policy for a log group, that log group uses only that policy for log group-level indexing, including any facet configurations. The log group ignores any account-wide field index policy that applies to log groups, but data source-based account policies may still apply.</td>
</tr>
<tr>
    <td><a href="#delete_index_policy"><CopyableCode code="delete_index_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a log-group level field index policy that was applied to a single log group. The indexing of the log events that happened before you delete the policy will still be used for as many as 30 days to improve CloudWatch Logs Insights queries. If the deleted policy included facet configurations, those facets will no longer be available for interactive exploration in the CloudWatch Logs Insights console for this log group. However, facet data is retained for up to 30 days. You can't use this operation to delete an account-level index policy. Instead, use DeleteAccountPolicy. If you delete a log-group level field index policy and there is an account-level field index policy, in a few minutes the log group begins using that account-wide policy to index new incoming log events. This operation only affects log group-level policies, including any facet configurations, and preserves any data source-based account policies that may apply to the log group.</td>
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
    defaultValue="describe_index_policies"
    values={[
        { label: 'describe_index_policies', value: 'describe_index_policies' }
    ]}
>
<TabItem value="describe_index_policies">

Returns the field index policies of the specified log group. For more information about field index policies, see PutIndexPolicy. If a specified log group has a log-group level index policy, that policy is returned by this operation. If a specified log group doesn't have a log-group level index policy, but an account-wide index policy applies to it, that account-wide policy is returned by this operation. To find information about only account-level policies, use DescribeAccountPolicies instead.

```sql
SELECT
index_policies,
next_token
FROM aws.logs.index_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_index_policy"
    values={[
        { label: 'put_index_policy', value: 'put_index_policy' }
    ]}
>
<TabItem value="put_index_policy">

Creates or updates a field index policy for the specified log group. Only log groups in the Standard log class support field index policies. For more information about log classes, see Log classes. You can use field index policies to create field indexes on fields found in log events in the log group. Creating field indexes speeds up and lowers the costs for CloudWatch Logs Insights queries that reference those field indexes, because these queries attempt to skip the processing of log events that are known to not match the indexed field. Good fields to index are fields that you often need to query for and fields or values that match only a small fraction of the total log events. Common examples of indexes include request ID, session ID, userID, and instance IDs. For more information, see Create field indexes to improve query performance and reduce costs. You can configure indexed fields as facets to enable interactive exploration and filtering of your logs in the CloudWatch Logs Insights console. Facets allow you to view value distributions and counts for indexed fields without running queries. When you create a field index, you can optionally set it as a facet to enable this interactive analysis capability. For more information, see Use facets to group and explore logs. To find the fields that are in your log group events, use the GetLogGroupFields operation. For example, suppose you have created a field index for requestId. Then, any CloudWatch Logs Insights query on that log group that includes requestId = value or requestId IN [value, value, ...] will process fewer log events to reduce costs, and have improved performance. CloudWatch Logs provides default field indexes for all log groups in the Standard log class. Default field indexes are automatically available for the following fields: @logStream @aws.region @aws.account @source.log traceId Default field indexes are in addition to any custom field indexes you define within your policy. Default field indexes are not counted towards your field index quota. Each index policy has the following quotas and restrictions: As many as 20 fields can be included in the policy. Each field name can include as many as 100 characters. Matches of log events to the names of indexed fields are case-sensitive. For example, a field index of RequestId won't match a log event containing requestId. Log group-level field index policies created with PutIndexPolicy override account-level field index policies created with PutAccountPolicy that apply to log groups. If you use PutIndexPolicy to create a field index policy for a log group, that log group uses only that policy for log group-level indexing, including any facet configurations. The log group ignores any account-wide field index policy that applies to log groups, but data source-based account policies may still apply.

```sql
REPLACE aws.logs.index_policies
SET 
logGroupIdentifier = '{{ logGroupIdentifier }}',
policyDocument = '{{ policyDocument }}'
WHERE 
region = '{{ region }}' --required
AND logGroupIdentifier = '{{ logGroupIdentifier }}' --required
AND policyDocument = '{{ policyDocument }}' --required
RETURNING
index_policy;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_index_policy"
    values={[
        { label: 'delete_index_policy', value: 'delete_index_policy' }
    ]}
>
<TabItem value="delete_index_policy">

Deletes a log-group level field index policy that was applied to a single log group. The indexing of the log events that happened before you delete the policy will still be used for as many as 30 days to improve CloudWatch Logs Insights queries. If the deleted policy included facet configurations, those facets will no longer be available for interactive exploration in the CloudWatch Logs Insights console for this log group. However, facet data is retained for up to 30 days. You can't use this operation to delete an account-level index policy. Instead, use DeleteAccountPolicy. If you delete a log-group level field index policy and there is an account-level field index policy, in a few minutes the log group begins using that account-wide policy to index new incoming log events. This operation only affects log group-level policies, including any facet configurations, and preserves any data source-based account policies that may apply to the log group.

```sql
DELETE FROM aws.logs.index_policies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

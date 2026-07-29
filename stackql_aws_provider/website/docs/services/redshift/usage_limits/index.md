--- 
title: usage_limits
hide_title: false
hide_table_of_contents: false
keywords:
  - usage_limits
  - redshift
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

Creates, updates, deletes, gets or lists a <code>usage_limits</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="usage_limits" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.usage_limits" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_usage_limits"
    values={[
        { label: 'describe_usage_limits', value: 'describe_usage_limits' }
    ]}
>
<TabItem value="describe_usage_limits">

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
    <td><CopyableCode code="amount" /></td>
    <td><code>integer</code></td>
    <td>The limit amount. If time-based, this amount is in minutes. If data-based, this amount is in terabytes (TB).</td>
</tr>
<tr>
    <td><CopyableCode code="breach_action" /></td>
    <td><code>string</code></td>
    <td>The action that Amazon Redshift takes when the limit is reached. Possible values are: log - To log an event in a system table. The default is log. emit-metric - To emit CloudWatch metrics. disable - To disable the feature until the next usage period begins.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the cluster with a usage limit.</td>
</tr>
<tr>
    <td><CopyableCode code="feature_type" /></td>
    <td><code>string</code></td>
    <td>The Amazon Redshift feature to which the limit applies.</td>
</tr>
<tr>
    <td><CopyableCode code="limit_type" /></td>
    <td><code>string</code></td>
    <td>The type of limit. Depending on the feature type, this can be based on a time duration or data size.</td>
</tr>
<tr>
    <td><CopyableCode code="period" /></td>
    <td><code>string</code></td>
    <td>The time period that the amount applies to. A weekly period begins on Sunday. The default is monthly.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>A list of tag instances.</td>
</tr>
<tr>
    <td><CopyableCode code="usage_limit_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the usage limit.</td>
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
    <td><a href="#describe_usage_limits"><CopyableCode code="describe_usage_limits" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-UsageLimitId"><code>UsageLimitId</code></a>, <a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-FeatureType"><code>FeatureType</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-TagKeys"><code>TagKeys</code></a>, <a href="#parameter-TagValues"><code>TagValues</code></a></td>
    <td>Shows usage limits on a cluster. Results are filtered based on the combination of input usage limit identifier, cluster identifier, and feature type parameters: If usage limit identifier, cluster identifier, and feature type are not provided, then all usage limit objects for the current account in the current region are returned. If usage limit identifier is provided, then the corresponding usage limit object is returned. If cluster identifier is provided, then all usage limit objects for the specified cluster are returned. If cluster identifier and feature type are provided, then all usage limit objects for the combination of cluster and feature are returned.</td>
</tr>
<tr>
    <td><a href="#create_usage_limit"><CopyableCode code="create_usage_limit" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-FeatureType"><code>FeatureType</code></a>, <a href="#parameter-LimitType"><code>LimitType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Amount"><code>Amount</code></a>, <a href="#parameter-Period"><code>Period</code></a>, <a href="#parameter-BreachAction"><code>BreachAction</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Creates a usage limit for a specified Amazon Redshift feature on a cluster. The usage limit is identified by the returned usage limit identifier.</td>
</tr>
<tr>
    <td><a href="#modify_usage_limit"><CopyableCode code="modify_usage_limit" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-UsageLimitId"><code>UsageLimitId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Amount"><code>Amount</code></a>, <a href="#parameter-BreachAction"><code>BreachAction</code></a></td>
    <td>Modifies a usage limit in a cluster. You can't modify the feature type or period of a usage limit.</td>
</tr>
<tr>
    <td><a href="#delete_usage_limit"><CopyableCode code="delete_usage_limit" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-UsageLimitId"><code>UsageLimitId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a usage limit from a cluster.</td>
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
<tr id="parameter-ClusterIdentifier">
    <td><CopyableCode code="ClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the cluster that you want to limit usage.</td>
</tr>
<tr id="parameter-FeatureType">
    <td><CopyableCode code="FeatureType" /></td>
    <td><code>string</code></td>
    <td>The Amazon Redshift feature that you want to limit.</td>
</tr>
<tr id="parameter-LimitType">
    <td><CopyableCode code="LimitType" /></td>
    <td><code>string</code></td>
    <td>The type of limit. Depending on the feature type, this can be based on a time duration or data size. If FeatureType is spectrum, then LimitType must be data-scanned. If FeatureType is concurrency-scaling, then LimitType must be time. If FeatureType is cross-region-datasharing, then LimitType must be data-scanned. If FeatureType is extra-compute-for-automatic-optimization, then LimitType must be time.</td>
</tr>
<tr id="parameter-UsageLimitId">
    <td><CopyableCode code="UsageLimitId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the usage limit to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Amount">
    <td><CopyableCode code="Amount" /></td>
    <td><code>integer (int64)</code></td>
    <td>The new limit amount. For more information about this parameter, see UsageLimit.</td>
</tr>
<tr id="parameter-BreachAction">
    <td><CopyableCode code="BreachAction" /></td>
    <td><code>string</code></td>
    <td>The new action that Amazon Redshift takes when the limit is reached. For more information about this parameter, see UsageLimit.</td>
</tr>
<tr id="parameter-ClusterIdentifier">
    <td><CopyableCode code="ClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the cluster for which you want to describe usage limits.</td>
</tr>
<tr id="parameter-FeatureType">
    <td><CopyableCode code="FeatureType" /></td>
    <td><code>string</code></td>
    <td>The feature type for which you want to describe usage limits.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeUsageLimits request exceed the value specified in MaxRecords, Amazon Web Services returns a value in the Marker field of the response. You can retrieve the next set of response records by providing the returned marker value in the Marker parameter and retrying the request.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified MaxRecords value, a value is returned in a marker field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. Default: 100 Constraints: minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-Period">
    <td><CopyableCode code="Period" /></td>
    <td><code>string</code></td>
    <td>The time period that the amount applies to. A weekly period begins on Sunday. The default is monthly.</td>
</tr>
<tr id="parameter-TagKeys">
    <td><CopyableCode code="TagKeys" /></td>
    <td><code>array</code></td>
    <td>A tag key or keys for which you want to return all matching usage limit objects that are associated with the specified key or keys. For example, suppose that you have parameter groups that are tagged with keys called owner and environment. If you specify both of these tag keys in the request, Amazon Redshift returns a response with the usage limit objects have either or both of these tag keys associated with them.</td>
</tr>
<tr id="parameter-TagValues">
    <td><CopyableCode code="TagValues" /></td>
    <td><code>array</code></td>
    <td>A tag value or values for which you want to return all matching usage limit objects that are associated with the specified tag value or values. For example, suppose that you have parameter groups that are tagged with values called admin and test. If you specify both of these tag values in the request, Amazon Redshift returns a response with the usage limit objects that have either or both of these tag values associated with them.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>A list of tag instances.</td>
</tr>
<tr id="parameter-UsageLimitId">
    <td><CopyableCode code="UsageLimitId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the usage limit to describe.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_usage_limits"
    values={[
        { label: 'describe_usage_limits', value: 'describe_usage_limits' }
    ]}
>
<TabItem value="describe_usage_limits">

Shows usage limits on a cluster. Results are filtered based on the combination of input usage limit identifier, cluster identifier, and feature type parameters: If usage limit identifier, cluster identifier, and feature type are not provided, then all usage limit objects for the current account in the current region are returned. If usage limit identifier is provided, then the corresponding usage limit object is returned. If cluster identifier is provided, then all usage limit objects for the specified cluster are returned. If cluster identifier and feature type are provided, then all usage limit objects for the combination of cluster and feature are returned.

```sql
SELECT
amount,
breach_action,
cluster_identifier,
feature_type,
limit_type,
period,
tags,
usage_limit_id
FROM aws.redshift.usage_limits
WHERE region = '{{ region }}' -- required
AND UsageLimitId = '{{ UsageLimitId }}'
AND ClusterIdentifier = '{{ ClusterIdentifier }}'
AND FeatureType = '{{ FeatureType }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
AND TagKeys = '{{ TagKeys }}'
AND TagValues = '{{ TagValues }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_usage_limit"
    values={[
        { label: 'create_usage_limit', value: 'create_usage_limit' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_usage_limit">

Creates a usage limit for a specified Amazon Redshift feature on a cluster. The usage limit is identified by the returned usage limit identifier.

```sql
INSERT INTO aws.redshift.usage_limits (
ClusterIdentifier,
FeatureType,
LimitType,
region,
Amount,
Period,
BreachAction,
Tags
)
SELECT 
'{{ ClusterIdentifier }}',
'{{ FeatureType }}',
'{{ LimitType }}',
'{{ region }}',
'{{ Amount }}',
'{{ Period }}',
'{{ BreachAction }}',
'{{ Tags }}'
RETURNING
amount,
breach_action,
cluster_identifier,
feature_type,
limit_type,
period,
tags,
usage_limit_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: usage_limits
  props:
    - name: ClusterIdentifier
      value: "{{ ClusterIdentifier }}"
      description: Required parameter for the usage_limits resource.
    - name: FeatureType
      value: "{{ FeatureType }}"
      description: Required parameter for the usage_limits resource.
    - name: LimitType
      value: "{{ LimitType }}"
      description: Required parameter for the usage_limits resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the usage_limits resource.
    - name: Amount
      value: "{{ Amount }}"
      description: The limit amount. If time-based, this amount is in minutes. If data-based, this amount is in terabytes (TB). The value must be a positive number.
      description: The limit amount. If time-based, this amount is in minutes. If data-based, this amount is in terabytes (TB). The value must be a positive number.
    - name: Period
      value: "{{ Period }}"
      description: The time period that the amount applies to. A weekly period begins on Sunday. The default is monthly.
      description: The time period that the amount applies to. A weekly period begins on Sunday. The default is monthly.
    - name: BreachAction
      value: "{{ BreachAction }}"
      description: The action that Amazon Redshift takes when the limit is reached. The default is log. For more information about this parameter, see UsageLimit.
      description: The action that Amazon Redshift takes when the limit is reached. The default is log. For more information about this parameter, see UsageLimit.
    - name: Tags
      value: "{{ Tags }}"
      description: A list of tag instances.
      description: A list of tag instances.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_usage_limit"
    values={[
        { label: 'modify_usage_limit', value: 'modify_usage_limit' }
    ]}
>
<TabItem value="modify_usage_limit">

Modifies a usage limit in a cluster. You can't modify the feature type or period of a usage limit.

```sql
UPDATE aws.redshift.usage_limits
SET 
-- No updatable properties
WHERE 
UsageLimitId = '{{ UsageLimitId }}' --required
AND region = '{{ region }}' --required
AND Amount = '{{ Amount}}'
AND BreachAction = '{{ BreachAction}}'
RETURNING
amount,
breach_action,
cluster_identifier,
feature_type,
limit_type,
period,
tags,
usage_limit_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_usage_limit"
    values={[
        { label: 'delete_usage_limit', value: 'delete_usage_limit' }
    ]}
>
<TabItem value="delete_usage_limit">

Deletes a usage limit from a cluster.

```sql
DELETE FROM aws.redshift.usage_limits
WHERE UsageLimitId = '{{ UsageLimitId }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

--- 
title: default_cluster_parameters
hide_title: false
hide_table_of_contents: false
keywords:
  - default_cluster_parameters
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

Creates, updates, deletes, gets or lists a <code>default_cluster_parameters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="default_cluster_parameters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.default_cluster_parameters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_default_cluster_parameters"
    values={[
        { label: 'describe_default_cluster_parameters', value: 'describe_default_cluster_parameters' }
    ]}
>
<TabItem value="describe_default_cluster_parameters">

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
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the Marker parameter and retrying the command. If the Marker field is empty, all response records have been retrieved for the request.</td>
</tr>
<tr>
    <td><CopyableCode code="ParameterGroupFamily" /></td>
    <td><code>string</code></td>
    <td>The name of the cluster parameter group family to which the engine default parameters apply.</td>
</tr>
<tr>
    <td><CopyableCode code="Parameters" /></td>
    <td><code>string</code></td>
    <td>The list of cluster default parameters.</td>
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
    <td><a href="#describe_default_cluster_parameters"><CopyableCode code="describe_default_cluster_parameters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ParameterGroupFamily"><code>ParameterGroupFamily</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns a list of parameter settings for the specified parameter group family. For more information about parameters and parameter groups, go to Amazon Redshift Parameter Groups in the Amazon Redshift Cluster Management Guide.</td>
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
<tr id="parameter-ParameterGroupFamily">
    <td><CopyableCode code="ParameterGroupFamily" /></td>
    <td><code>string</code></td>
    <td>The name of the cluster parameter group family.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeDefaultClusterParameters request exceed the value specified in MaxRecords, Amazon Web Services returns a value in the Marker field of the response. You can retrieve the next set of response records by providing the returned marker value in the Marker parameter and retrying the request.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified MaxRecords value, a value is returned in a marker field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. Default: 100 Constraints: minimum 20, maximum 100.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_default_cluster_parameters"
    values={[
        { label: 'describe_default_cluster_parameters', value: 'describe_default_cluster_parameters' }
    ]}
>
<TabItem value="describe_default_cluster_parameters">

Returns a list of parameter settings for the specified parameter group family. For more information about parameters and parameter groups, go to Amazon Redshift Parameter Groups in the Amazon Redshift Cluster Management Guide.

```sql
SELECT
Marker,
ParameterGroupFamily,
Parameters
FROM aws.redshift.default_cluster_parameters
WHERE ParameterGroupFamily = '{{ ParameterGroupFamily }}' -- required
AND region = '{{ region }}' -- required
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>

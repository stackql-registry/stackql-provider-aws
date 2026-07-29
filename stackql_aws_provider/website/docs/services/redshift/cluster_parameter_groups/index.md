--- 
title: cluster_parameter_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - cluster_parameter_groups
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

Creates, updates, deletes, gets or lists a <code>cluster_parameter_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cluster_parameter_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.cluster_parameter_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_cluster_parameter_groups"
    values={[
        { label: 'describe_cluster_parameter_groups', value: 'describe_cluster_parameter_groups' }
    ]}
>
<TabItem value="describe_cluster_parameter_groups">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the parameter group.</td>
</tr>
<tr>
    <td><CopyableCode code="parameter_group_family" /></td>
    <td><code>string</code></td>
    <td>The name of the cluster parameter group family that this cluster parameter group is compatible with.</td>
</tr>
<tr>
    <td><CopyableCode code="parameter_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the cluster parameter group.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>The list of tags for the cluster parameter group.</td>
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
    <td><a href="#describe_cluster_parameter_groups"><CopyableCode code="describe_cluster_parameter_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ParameterGroupName"><code>ParameterGroupName</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-TagKeys"><code>TagKeys</code></a>, <a href="#parameter-TagValues"><code>TagValues</code></a></td>
    <td>Returns a list of Amazon Redshift parameter groups, including parameter groups you created and the default parameter group. For each parameter group, the response includes the parameter group name, description, and parameter group family name. You can optionally specify a name to retrieve the description of a specific parameter group. For more information about parameters and parameter groups, go to Amazon Redshift Parameter Groups in the Amazon Redshift Cluster Management Guide. If you specify both tag keys and tag values in the same request, Amazon Redshift returns all parameter groups that match any combination of the specified keys and values. For example, if you have owner and environment for tag keys, and admin and test for tag values, all parameter groups that have any combination of those values are returned. If both tag keys and values are omitted from the request, parameter groups are returned regardless of whether they have tag keys or values associated with them.</td>
</tr>
<tr>
    <td><a href="#create_cluster_parameter_group"><CopyableCode code="create_cluster_parameter_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ParameterGroupName"><code>ParameterGroupName</code></a>, <a href="#parameter-ParameterGroupFamily"><code>ParameterGroupFamily</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Creates an Amazon Redshift parameter group. Creating parameter groups is independent of creating clusters. You can associate a cluster with a parameter group when you create the cluster. You can also associate an existing cluster with a parameter group after the cluster is created by using ModifyCluster. Parameters in the parameter group define specific behavior that applies to the databases you create on the cluster. For more information about parameters and parameter groups, go to Amazon Redshift Parameter Groups in the Amazon Redshift Cluster Management Guide.</td>
</tr>
<tr>
    <td><a href="#modify_cluster_parameter_group"><CopyableCode code="modify_cluster_parameter_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ParameterGroupName"><code>ParameterGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Parameters"><code>Parameters</code></a></td>
    <td>Modifies the parameters of a parameter group. For the parameters parameter, it can't contain ASCII characters. For more information about parameters and parameter groups, go to Amazon Redshift Parameter Groups in the Amazon Redshift Cluster Management Guide.</td>
</tr>
<tr>
    <td><a href="#delete_cluster_parameter_group"><CopyableCode code="delete_cluster_parameter_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ParameterGroupName"><code>ParameterGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a specified Amazon Redshift parameter group. You cannot delete a parameter group if it is associated with a cluster.</td>
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
    <td>The Amazon Redshift engine version to which the cluster parameter group applies. The cluster engine version determines the set of parameters. To get a list of valid parameter group family names, you can call DescribeClusterParameterGroups. By default, Amazon Redshift returns a list of all the parameter groups that are owned by your Amazon Web Services account, including the default parameter groups for each Amazon Redshift engine version. The parameter group family names associated with the default parameter groups provide you the valid values. For example, a valid family name is "redshift-1.0".</td>
</tr>
<tr id="parameter-ParameterGroupName">
    <td><CopyableCode code="ParameterGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the parameter group to be deleted. Constraints: Must be the name of an existing cluster parameter group. Cannot delete a default cluster parameter group.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description of the parameter group.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeClusterParameterGroups request exceed the value specified in MaxRecords, Amazon Web Services returns a value in the Marker field of the response. You can retrieve the next set of response records by providing the returned marker value in the Marker parameter and retrying the request.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified MaxRecords value, a value is returned in a marker field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. Default: 100 Constraints: minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-ParameterGroupName">
    <td><CopyableCode code="ParameterGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of a specific parameter group for which to return details. By default, details about all parameter groups and the default parameter group are returned.</td>
</tr>
<tr id="parameter-Parameters">
    <td><CopyableCode code="Parameters" /></td>
    <td><code>array</code></td>
    <td>An array of parameters to be modified. A maximum of 20 parameters can be modified in a single request. For each parameter to be modified, you must supply at least the parameter name and parameter value; other name-value pairs of the parameter are optional. For the workload management (WLM) configuration, you must supply all the name-value pairs in the wlm_json_configuration parameter.</td>
</tr>
<tr id="parameter-TagKeys">
    <td><CopyableCode code="TagKeys" /></td>
    <td><code>array</code></td>
    <td>A tag key or keys for which you want to return all matching cluster parameter groups that are associated with the specified key or keys. For example, suppose that you have parameter groups that are tagged with keys called owner and environment. If you specify both of these tag keys in the request, Amazon Redshift returns a response with the parameter groups that have either or both of these tag keys associated with them.</td>
</tr>
<tr id="parameter-TagValues">
    <td><CopyableCode code="TagValues" /></td>
    <td><code>array</code></td>
    <td>A tag value or values for which you want to return all matching cluster parameter groups that are associated with the specified tag value or values. For example, suppose that you have parameter groups that are tagged with values called admin and test. If you specify both of these tag values in the request, Amazon Redshift returns a response with the parameter groups that have either or both of these tag values associated with them.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>A list of tag instances.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_cluster_parameter_groups"
    values={[
        { label: 'describe_cluster_parameter_groups', value: 'describe_cluster_parameter_groups' }
    ]}
>
<TabItem value="describe_cluster_parameter_groups">

Returns a list of Amazon Redshift parameter groups, including parameter groups you created and the default parameter group. For each parameter group, the response includes the parameter group name, description, and parameter group family name. You can optionally specify a name to retrieve the description of a specific parameter group. For more information about parameters and parameter groups, go to Amazon Redshift Parameter Groups in the Amazon Redshift Cluster Management Guide. If you specify both tag keys and tag values in the same request, Amazon Redshift returns all parameter groups that match any combination of the specified keys and values. For example, if you have owner and environment for tag keys, and admin and test for tag values, all parameter groups that have any combination of those values are returned. If both tag keys and values are omitted from the request, parameter groups are returned regardless of whether they have tag keys or values associated with them.

```sql
SELECT
description,
parameter_group_family,
parameter_group_name,
tags
FROM aws.redshift.cluster_parameter_groups
WHERE region = '{{ region }}' -- required
AND ParameterGroupName = '{{ ParameterGroupName }}'
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
    defaultValue="create_cluster_parameter_group"
    values={[
        { label: 'create_cluster_parameter_group', value: 'create_cluster_parameter_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cluster_parameter_group">

Creates an Amazon Redshift parameter group. Creating parameter groups is independent of creating clusters. You can associate a cluster with a parameter group when you create the cluster. You can also associate an existing cluster with a parameter group after the cluster is created by using ModifyCluster. Parameters in the parameter group define specific behavior that applies to the databases you create on the cluster. For more information about parameters and parameter groups, go to Amazon Redshift Parameter Groups in the Amazon Redshift Cluster Management Guide.

```sql
INSERT INTO aws.redshift.cluster_parameter_groups (
ParameterGroupName,
ParameterGroupFamily,
region,
Description,
Tags
)
SELECT 
'{{ ParameterGroupName }}',
'{{ ParameterGroupFamily }}',
'{{ region }}',
'{{ Description }}',
'{{ Tags }}'
RETURNING
description,
parameter_group_family,
parameter_group_name,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cluster_parameter_groups
  props:
    - name: ParameterGroupName
      value: "{{ ParameterGroupName }}"
      description: Required parameter for the cluster_parameter_groups resource.
    - name: ParameterGroupFamily
      value: "{{ ParameterGroupFamily }}"
      description: Required parameter for the cluster_parameter_groups resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the cluster_parameter_groups resource.
    - name: Description
      value: "{{ Description }}"
      description: A description of the parameter group.
      description: A description of the parameter group.
    - name: Tags
      value: "{{ Tags }}"
      description: A list of tag instances.
      description: A list of tag instances.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_cluster_parameter_group"
    values={[
        { label: 'modify_cluster_parameter_group', value: 'modify_cluster_parameter_group' }
    ]}
>
<TabItem value="modify_cluster_parameter_group">

Modifies the parameters of a parameter group. For the parameters parameter, it can't contain ASCII characters. For more information about parameters and parameter groups, go to Amazon Redshift Parameter Groups in the Amazon Redshift Cluster Management Guide.

```sql
UPDATE aws.redshift.cluster_parameter_groups
SET 
-- No updatable properties
WHERE 
ParameterGroupName = '{{ ParameterGroupName }}' --required
AND region = '{{ region }}' --required
AND Parameters = '{{ Parameters}}'
RETURNING
parameter_group_name,
parameter_group_status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_cluster_parameter_group"
    values={[
        { label: 'delete_cluster_parameter_group', value: 'delete_cluster_parameter_group' }
    ]}
>
<TabItem value="delete_cluster_parameter_group">

Deletes a specified Amazon Redshift parameter group. You cannot delete a parameter group if it is associated with a cluster.

```sql
DELETE FROM aws.redshift.cluster_parameter_groups
WHERE ParameterGroupName = '{{ ParameterGroupName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

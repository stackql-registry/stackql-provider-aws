--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
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

Creates, updates, deletes, gets or lists a <code>tags</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tags" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.tags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_tags"
    values={[
        { label: 'describe_tags', value: 'describe_tags' }
    ]}
>
<TabItem value="describe_tags">

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
    <td><CopyableCode code="ResourceName" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) with which the tag is associated, for example: arn:aws:redshift:us-east-2:123456789:cluster:t1.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceType" /></td>
    <td><code>string</code></td>
    <td>The type of resource with which the tag is associated. Valid resource types are: Cluster CIDR/IP EC2 security group Snapshot Cluster security group Subnet group HSM connection HSM certificate Parameter group For more information about Amazon Redshift resource types and constructing ARNs, go to Constructing an Amazon Redshift Amazon Resource Name (ARN) in the Amazon Redshift Cluster Management Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="Tag" /></td>
    <td><code>string</code></td>
    <td>The tag for the resource.</td>
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
    <td><a href="#describe_tags"><CopyableCode code="describe_tags" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ResourceName"><code>ResourceName</code></a>, <a href="#parameter-ResourceType"><code>ResourceType</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-TagKeys"><code>TagKeys</code></a>, <a href="#parameter-TagValues"><code>TagValues</code></a></td>
    <td>Returns a list of tags. You can return tags from a specific resource by specifying an ARN, or you can return all tags for a given type of resource, such as clusters, snapshots, and so on. The following are limitations for DescribeTags: You cannot specify an ARN and a resource-type value together in the same request. You cannot use the MaxRecords and Marker parameters together with the ARN parameter. The MaxRecords parameter can be a range from 10 to 50 results to return in a request. If you specify both tag keys and tag values in the same request, Amazon Redshift returns all resources that match any combination of the specified keys and values. For example, if you have owner and environment for tag keys, and admin and test for tag values, all resources that have any combination of those values are returned. If both tag keys and values are omitted from the request, resources are returned regardless of whether they have tag keys or values associated with them.</td>
</tr>
<tr>
    <td><a href="#create_tags"><CopyableCode code="create_tags" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ResourceName"><code>ResourceName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Adds tags to a cluster. A resource can have up to 50 tags. If you try to create more than 50 tags for a resource, you will receive an error and the attempt will fail. If you specify a key that already exists for the resource, the value for that key will be updated with the new value.</td>
</tr>
<tr>
    <td><a href="#delete_tags"><CopyableCode code="delete_tags" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ResourceName"><code>ResourceName</code></a>, <a href="#parameter-TagKeys"><code>TagKeys</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes tags from a resource. You must provide the ARN of the resource from which you want to delete the tag or tags.</td>
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
<tr id="parameter-ResourceName">
    <td><CopyableCode code="ResourceName" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) from which you want to remove the tag or tags. For example, arn:aws:redshift:us-east-2:123456789:cluster:t1.</td>
</tr>
<tr id="parameter-TagKeys">
    <td><CopyableCode code="TagKeys" /></td>
    <td><code>array</code></td>
    <td>The tag key that you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the marker parameter and retrying the command. If the marker field is empty, all response records have been retrieved for the request.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number or response records to return in each call. If the number of remaining response records exceeds the specified MaxRecords value, a value is returned in a marker field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.</td>
</tr>
<tr id="parameter-ResourceName">
    <td><CopyableCode code="ResourceName" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for which you want to describe the tag or tags. For example, arn:aws:redshift:us-east-2:123456789:cluster:t1.</td>
</tr>
<tr id="parameter-ResourceType">
    <td><CopyableCode code="ResourceType" /></td>
    <td><code>string</code></td>
    <td>The type of resource with which you want to view tags. Valid resource types are: Cluster CIDR/IP EC2 security group Snapshot Cluster security group Subnet group HSM connection HSM certificate Parameter group Snapshot copy grant Integration (zero-ETL integration or S3 event integration) To describe the tags associated with an integration, don't specify ResourceType, instead specify the ResourceName of the integration. For more information about Amazon Redshift resource types and constructing ARNs, go to Specifying Policy Elements: Actions, Effects, Resources, and Principals in the Amazon Redshift Cluster Management Guide.</td>
</tr>
<tr id="parameter-TagKeys">
    <td><CopyableCode code="TagKeys" /></td>
    <td><code>array</code></td>
    <td>A tag key or keys for which you want to return all matching resources that are associated with the specified key or keys. For example, suppose that you have resources tagged with keys called owner and environment. If you specify both of these tag keys in the request, Amazon Redshift returns a response with all resources that have either or both of these tag keys associated with them.</td>
</tr>
<tr id="parameter-TagValues">
    <td><CopyableCode code="TagValues" /></td>
    <td><code>array</code></td>
    <td>A tag value or values for which you want to return all matching resources that are associated with the specified value or values. For example, suppose that you have resources tagged with values called admin and test. If you specify both of these tag values in the request, Amazon Redshift returns a response with all resources that have either or both of these tag values associated with them.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>One or more name/value pairs to add as tags to the specified resource. Each tag name is passed in with the parameter Key and the corresponding value is passed in with the parameter Value. The Key and Value parameters are separated by a comma (,). Separate multiple tags with a space. For example, --tags "Key"="owner","Value"="admin" "Key"="environment","Value"="test" "Key"="version","Value"="1.0".</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_tags"
    values={[
        { label: 'describe_tags', value: 'describe_tags' }
    ]}
>
<TabItem value="describe_tags">

Returns a list of tags. You can return tags from a specific resource by specifying an ARN, or you can return all tags for a given type of resource, such as clusters, snapshots, and so on. The following are limitations for DescribeTags: You cannot specify an ARN and a resource-type value together in the same request. You cannot use the MaxRecords and Marker parameters together with the ARN parameter. The MaxRecords parameter can be a range from 10 to 50 results to return in a request. If you specify both tag keys and tag values in the same request, Amazon Redshift returns all resources that match any combination of the specified keys and values. For example, if you have owner and environment for tag keys, and admin and test for tag values, all resources that have any combination of those values are returned. If both tag keys and values are omitted from the request, resources are returned regardless of whether they have tag keys or values associated with them.

```sql
SELECT
ResourceName,
ResourceType,
Tag
FROM aws.redshift.tags
WHERE region = '{{ region }}' -- required
AND ResourceName = '{{ ResourceName }}'
AND ResourceType = '{{ ResourceType }}'
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
    defaultValue="create_tags"
    values={[
        { label: 'create_tags', value: 'create_tags' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_tags">

Adds tags to a cluster. A resource can have up to 50 tags. If you try to create more than 50 tags for a resource, you will receive an error and the attempt will fail. If you specify a key that already exists for the resource, the value for that key will be updated with the new value.

```sql
INSERT INTO aws.redshift.tags (
ResourceName,
region,
Tags
)
SELECT 
'{{ ResourceName }}',
'{{ region }}',
'{{ Tags }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: tags
  props:
    - name: ResourceName
      value: "{{ ResourceName }}"
      description: Required parameter for the tags resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the tags resource.
    - name: Tags
      value: "{{ Tags }}"
      description: One or more name/value pairs to add as tags to the specified resource. Each tag name is passed in with the parameter Key and the corresponding value is passed in with the parameter Value. The Key and Value parameters are separated by a comma (,). Separate multiple tags with a space. For example, --tags "Key"="owner","Value"="admin" "Key"="environment","Value"="test" "Key"="version","Value"="1.0".
      description: One or more name/value pairs to add as tags to the specified resource. Each tag name is passed in with the parameter Key and the corresponding value is passed in with the parameter Value. The Key and Value parameters are separated by a comma (,). Separate multiple tags with a space. For example, --tags "Key"="owner","Value"="admin" "Key"="environment","Value"="test" "Key"="version","Value"="1.0".
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_tags"
    values={[
        { label: 'delete_tags', value: 'delete_tags' }
    ]}
>
<TabItem value="delete_tags">

Deletes tags from a resource. You must provide the ARN of the resource from which you want to delete the tag or tags.

```sql
DELETE FROM aws.redshift.tags
WHERE ResourceName = '{{ ResourceName }}' --required
AND TagKeys = '{{ TagKeys }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

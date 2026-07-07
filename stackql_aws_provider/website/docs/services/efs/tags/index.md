--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
  - efs
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.efs.tags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_tags"
    values={[
        { label: 'describe_tags', value: 'describe_tags' },
        { label: 'list_tags_for_resource', value: 'list_tags_for_resource' }
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
    <td><CopyableCode code="Key" /></td>
    <td><code>string</code></td>
    <td>The tag key (String). The key can't start with aws:. (pattern: &lt;code&gt;^(?!&#91;aA&#93;&#123;1&#125;&#91;wW&#93;&#123;1&#125;&#91;sS&#93;&#123;1&#125;:)(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-@&#93;+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Value" /></td>
    <td><code>string</code></td>
    <td>The value of the tag key. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-@&#93;*)$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_tags_for_resource">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>Token used for pagination. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>An array of the tags for the specified EFS resource.</td>
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
    <td><a href="#parameter-file_system_id"><code>file_system_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxItems"><code>MaxItems</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>DEPRECATED - The DescribeTags action is deprecated and not maintained. To view tags associated with EFS resources, use the ListTagsForResource API action. Returns the tags associated with a file system. The order of tags returned in the response of one DescribeTags call and the order of tags returned across the responses of a multiple-call iteration (when using pagination) is unspecified. This operation requires permissions for the elasticfilesystem:DescribeTags action.</td>
</tr>
<tr>
    <td><a href="#list_tags_for_resource"><CopyableCode code="list_tags_for_resource" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Lists all tags for a top-level EFS resource. You must provide the ID of the resource that you want to retrieve the tags for. This operation requires permissions for the elasticfilesystem:DescribeAccessPoints action.</td>
</tr>
<tr>
    <td><a href="#create_tags"><CopyableCode code="create_tags" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-file_system_id"><code>file_system_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>DEPRECATED - CreateTags is deprecated and not maintained. To create tags for EFS resources, use the API action. Creates or overwrites tags associated with a file system. Each tag is a key-value pair. If a tag key specified in the request already exists on the file system, this operation overwrites its value with the value provided in the request. If you add the Name tag to your file system, Amazon EFS returns it in the response to the DescribeFileSystems operation. This operation requires permission for the elasticfilesystem:CreateTags action.</td>
</tr>
<tr>
    <td><a href="#tag_resource"><CopyableCode code="tag_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a tag for an EFS resource. You can create tags for EFS file systems and access points using this API operation. This operation requires permissions for the elasticfilesystem:TagResource action.</td>
</tr>
<tr>
    <td><a href="#delete_tags"><CopyableCode code="delete_tags" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-file_system_id"><code>file_system_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>DEPRECATED - DeleteTags is deprecated and not maintained. To remove tags from EFS resources, use the API action. Deletes the specified tags from a file system. If the DeleteTags request includes a tag key that doesn't exist, Amazon EFS ignores it and doesn't cause an error. For more information about tags and related restrictions, see Tag restrictions in the Billing and Cost Management User Guide. This operation requires permissions for the elasticfilesystem:DeleteTags action.</td>
</tr>
<tr>
    <td><a href="#untag_resource"><CopyableCode code="untag_resource" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-tagKeys"><code>tagKeys</code></a></td>
    <td>Removes tags from an EFS resource. You can remove tags from EFS file systems and access points using this API operation. This operation requires permissions for the elasticfilesystem:UntagResource action.</td>
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
<tr id="parameter-file_system_id">
    <td><CopyableCode code="file_system_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the file system whose tags you want to delete (String).</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-resource_id">
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>Specifies the EFS resource that you want to remove tags from.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>(Optional) An opaque pagination token returned from a previous DescribeTags operation (String). If present, it specifies to continue the list from where the previous call left off.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>(Optional) The maximum number of file system tags to return in the response. Currently, this number is automatically set to 100, and other values are ignored. The response is paginated at 100 per page if you have more than 100 tags.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>(Optional) Specifies the maximum number of tag objects to return in the response. The default value is 100.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>(Optional) You can use NextToken in a subsequent request to fetch the next page of access point descriptions if the response payload was paginated.</td>
</tr>
<tr id="parameter-tagKeys">
    <td><CopyableCode code="tagKeys" /></td>
    <td><code>array</code></td>
    <td>The keys of the key-value tag pairs that you want to remove from the specified EFS resource.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_tags"
    values={[
        { label: 'describe_tags', value: 'describe_tags' },
        { label: 'list_tags_for_resource', value: 'list_tags_for_resource' }
    ]}
>
<TabItem value="describe_tags">

DEPRECATED - The DescribeTags action is deprecated and not maintained. To view tags associated with EFS resources, use the ListTagsForResource API action. Returns the tags associated with a file system. The order of tags returned in the response of one DescribeTags call and the order of tags returned across the responses of a multiple-call iteration (when using pagination) is unspecified. This operation requires permissions for the elasticfilesystem:DescribeTags action.

```sql
SELECT
Key,
Value
FROM aws.efs.tags
WHERE file_system_id = '{{ file_system_id }}' -- required
AND region = '{{ region }}' -- required
AND MaxItems = '{{ MaxItems }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
<TabItem value="list_tags_for_resource">

Lists all tags for a top-level EFS resource. You must provide the ID of the resource that you want to retrieve the tags for. This operation requires permissions for the elasticfilesystem:DescribeAccessPoints action.

```sql
SELECT
NextToken,
Tags
FROM aws.efs.tags
WHERE resource_id = '{{ resource_id }}' -- required
AND region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
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

DEPRECATED - CreateTags is deprecated and not maintained. To create tags for EFS resources, use the API action. Creates or overwrites tags associated with a file system. Each tag is a key-value pair. If a tag key specified in the request already exists on the file system, this operation overwrites its value with the value provided in the request. If you add the Name tag to your file system, Amazon EFS returns it in the response to the DescribeFileSystems operation. This operation requires permission for the elasticfilesystem:CreateTags action.

```sql
INSERT INTO aws.efs.tags (
Tags,
file_system_id,
region
)
SELECT 
'{{ Tags }}',
'{{ file_system_id }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: tags
  props:
    - name: file_system_id
      value: "{{ file_system_id }}"
      description: Required parameter for the tags resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the tags resource.
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="tag_resource"
    values={[
        { label: 'tag_resource', value: 'tag_resource' }
    ]}
>
<TabItem value="tag_resource">

Creates a tag for an EFS resource. You can create tags for EFS file systems and access points using this API operation. This operation requires permissions for the elasticfilesystem:TagResource action.

```sql
UPDATE aws.efs.tags
SET 
Tags = '{{ Tags }}'
WHERE 
resource_id = '{{ resource_id }}' --required
AND region = '{{ region }}' --required;
```
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

DEPRECATED - DeleteTags is deprecated and not maintained. To remove tags from EFS resources, use the API action. Deletes the specified tags from a file system. If the DeleteTags request includes a tag key that doesn't exist, Amazon EFS ignores it and doesn't cause an error. For more information about tags and related restrictions, see Tag restrictions in the Billing and Cost Management User Guide. This operation requires permissions for the elasticfilesystem:DeleteTags action.

```sql
DELETE FROM aws.efs.tags
WHERE file_system_id = '{{ file_system_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="untag_resource"
    values={[
        { label: 'untag_resource', value: 'untag_resource' }
    ]}
>
<TabItem value="untag_resource">

Removes tags from an EFS resource. You can remove tags from EFS file systems and access points using this API operation. This operation requires permissions for the elasticfilesystem:UntagResource action.

```sql
EXEC aws.efs.tags.untag_resource 
@resource_id='{{ resource_id }}' --required, 
@region='{{ region }}' --required, 
@tagKeys='{{ tagKeys }}'
;
```
</TabItem>
</Tabs>

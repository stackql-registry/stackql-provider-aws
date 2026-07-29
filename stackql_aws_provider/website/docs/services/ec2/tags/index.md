--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
  - ec2
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.tags" /></td></tr>
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
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>The tag key.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The resource type.</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>The tag value.</td>
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
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Describes the specified tags for your EC2 resources. For more information about tags, see Tag your Amazon EC2 resources in the Amazon Elastic Compute Cloud User Guide. We strongly recommend using only paginated requests. Unpaginated requests are susceptible to throttling and timeouts. The order of the elements in the response, including those within nested structures, might vary. Applications should not assume the elements appear in a particular order.</td>
</tr>
<tr>
    <td><a href="#create_tags"><CopyableCode code="create_tags" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ResourceId"><code>ResourceId</code></a>, <a href="#parameter-Tag"><code>Tag</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Adds or overwrites only the specified tags for the specified Amazon EC2 resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value. Tag keys must be unique per resource. For more information about tags, see Tag your Amazon EC2 resources in the Amazon Elastic Compute Cloud User Guide. For more information about creating IAM policies that control users' access to resources based on tags, see Supported resource-level permissions for Amazon EC2 API actions in the Amazon Elastic Compute Cloud User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_tags"><CopyableCode code="delete_tags" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ResourceId"><code>ResourceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Tag"><code>Tag</code></a></td>
    <td>Deletes the specified set of tags from the specified set of resources. To list the current tags, use DescribeTags. For more information about tags, see Tag your Amazon EC2 resources in the Amazon Elastic Compute Cloud User Guide.</td>
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
<tr id="parameter-ResourceId">
    <td><CopyableCode code="ResourceId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the resources, separated by spaces. Constraints: Up to 1000 resource IDs. We recommend breaking up this request into smaller batches.</td>
</tr>
<tr id="parameter-Tag">
    <td><CopyableCode code="Tag" /></td>
    <td><code>array</code></td>
    <td>The tags. The value parameter is required, but if you don't want the tag to have a value, specify the parameter with no value, and we set the value to an empty string.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. key - The tag key. resource-id - The ID of the resource. resource-type - The resource type. For a list of possible values, see TagSpecification. tag:<code>&lt;key&gt;</code> - The key/value combination of the tag. For example, specify "tag:Owner" for the filter name and "TeamA" for the filter value to find resources with the tag "Owner=TeamA". value - The tag value.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. This value can be between 5 and 1000. To get the next page of items, make another request with the token returned in the output. For more information, see Pagination.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</td>
</tr>
<tr id="parameter-Tag">
    <td><CopyableCode code="Tag" /></td>
    <td><code>array</code></td>
    <td>The tags to delete. Specify a tag key and an optional tag value to delete specific tags. If you specify a tag key without a tag value, we delete any tag with this key regardless of its value. If you specify a tag key with an empty string as the tag value, we delete the tag only if its value is an empty string. If you omit this parameter, we delete all user-defined tags for the specified resources. We do not delete Amazon Web Services-generated tags (tags that have the aws: prefix). Constraints: Up to 1000 tags.</td>
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

Describes the specified tags for your EC2 resources. For more information about tags, see Tag your Amazon EC2 resources in the Amazon Elastic Compute Cloud User Guide. We strongly recommend using only paginated requests. Unpaginated requests are susceptible to throttling and timeouts. The order of the elements in the response, including those within nested structures, might vary. Applications should not assume the elements appear in a particular order.

```sql
SELECT
key,
resource_id,
resource_type,
value
FROM aws.ec2.tags
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
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

Adds or overwrites only the specified tags for the specified Amazon EC2 resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value. Tag keys must be unique per resource. For more information about tags, see Tag your Amazon EC2 resources in the Amazon Elastic Compute Cloud User Guide. For more information about creating IAM policies that control users' access to resources based on tags, see Supported resource-level permissions for Amazon EC2 API actions in the Amazon Elastic Compute Cloud User Guide.

```sql
INSERT INTO aws.ec2.tags (
ResourceId,
Tag,
region,
DryRun
)
SELECT 
'{{ ResourceId }}',
'{{ Tag }}',
'{{ region }}',
'{{ DryRun }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: tags
  props:
    - name: ResourceId
      value: "{{ ResourceId }}"
      description: Required parameter for the tags resource.
    - name: Tag
      value: "{{ Tag }}"
      description: Required parameter for the tags resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the tags resource.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
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

Deletes the specified set of tags from the specified set of resources. To list the current tags, use DescribeTags. For more information about tags, see Tag your Amazon EC2 resources in the Amazon Elastic Compute Cloud User Guide.

```sql
DELETE FROM aws.ec2.tags
WHERE ResourceId = '{{ ResourceId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
AND Tag = '{{ Tag }}'
;
```
</TabItem>
</Tabs>

--- 
title: image_references
hide_title: false
hide_table_of_contents: false
keywords:
  - image_references
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

Creates, updates, deletes, gets or lists an <code>image_references</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="image_references" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.image_references" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_image_references"
    values={[
        { label: 'describe_image_references', value: 'describe_image_references' }
    ]}
>
<TabItem value="describe_image_references">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource referencing the image.</td>
</tr>
<tr>
    <td><CopyableCode code="image_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the referenced image.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of resource referencing the image.</td>
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
    <td><a href="#describe_image_references"><CopyableCode code="describe_image_references" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ImageId"><code>ImageId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-IncludeAllResourceTypes"><code>IncludeAllResourceTypes</code></a>, <a href="#parameter-ResourceType"><code>ResourceType</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Describes your Amazon Web Services resources that are referencing the specified images. For more information, see Identify your resources referencing specified AMIs in the Amazon EC2 User Guide.</td>
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
<tr id="parameter-ImageId">
    <td><CopyableCode code="ImageId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the images to check for resource references.</td>
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
<tr id="parameter-IncludeAllResourceTypes">
    <td><CopyableCode code="IncludeAllResourceTypes" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to check all supported Amazon Web Services resource types for image references. When specified, default values are applied for ResourceTypeOptions. For the default values, see How AMI reference checks work in the Amazon EC2 User Guide. If you also specify ResourceTypes with ResourceTypeOptions, your specified values override the default values. Supported resource types: ec2:Instance | ec2:LaunchTemplate | ssm:Parameter | imagebuilder:ImageRecipe | imagebuilder:ContainerRecipe Either IncludeAllResourceTypes or ResourceTypes must be specified.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see Pagination.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</td>
</tr>
<tr id="parameter-ResourceType">
    <td><CopyableCode code="ResourceType" /></td>
    <td><code>array</code></td>
    <td>The Amazon Web Services resource types to check for image references. Either IncludeAllResourceTypes or ResourceTypes must be specified.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_image_references"
    values={[
        { label: 'describe_image_references', value: 'describe_image_references' }
    ]}
>
<TabItem value="describe_image_references">

Describes your Amazon Web Services resources that are referencing the specified images. For more information, see Identify your resources referencing specified AMIs in the Amazon EC2 User Guide.

```sql
SELECT
arn,
image_id,
resource_type
FROM aws.ec2.image_references
WHERE ImageId = '{{ ImageId }}' -- required
AND region = '{{ region }}' -- required
AND IncludeAllResourceTypes = '{{ IncludeAllResourceTypes }}'
AND ResourceType = '{{ ResourceType }}'
AND NextToken = '{{ NextToken }}'
AND DryRun = '{{ DryRun }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>

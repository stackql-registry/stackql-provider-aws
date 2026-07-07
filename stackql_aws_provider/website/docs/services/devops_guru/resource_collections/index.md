--- 
title: resource_collections
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_collections
  - devops_guru
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

Creates, updates, deletes, gets or lists a <code>resource_collections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_collections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devops_guru.resource_collections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resource_collection"
    values={[
        { label: 'get_resource_collection', value: 'get_resource_collection' }
    ]}
>
<TabItem value="get_resource_collection">

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
    <td><CopyableCode code="CloudFormation" /></td>
    <td><code>object</code></td>
    <td>Information about Amazon Web Services CloudFormation stacks. You can use up to 500 stacks to specify which Amazon Web Services resources in your account to analyze. For more information, see Stacks in the Amazon Web Services CloudFormation User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The Amazon Web Services tags used to filter the resources in the resource collection. Tags help you identify and organize your Amazon Web Services resources. Many Amazon Web Services services support tagging, so you can assign the same tag to resources from different services to indicate that the resources are related. For example, you can assign the same tag to an Amazon DynamoDB table resource that you assign to an Lambda function. For more information about using tags, see the Tagging best practices whitepaper. Each Amazon Web Services tag has two parts. A tag key (for example, CostCenter, Environment, Project, or Secret). Tag keys are case-sensitive. An optional field known as a tag value (for example, 111122223333, Production, or a team name). Omitting the tag value is the same as using an empty string. Like tag keys, tag values are case-sensitive. Together these are known as key-value pairs. The string used for a key in a tag that you use to define your resource coverage must begin with the prefix Devops-guru-. The tag key might be DevOps-Guru-deployment-application or devops-guru-rds-application. When you create a key, the case of characters in the key can be whatever you choose. After you create a key, it is case-sensitive. For example, DevOps Guru works with a key named devops-guru-rds and a key named DevOps-Guru-RDS, and these act as two different keys. Possible key/value pairs in your application might be Devops-Guru-production-application/RDS or Devops-Guru-production-application/containers.</td>
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
    <td><a href="#get_resource_collection"><CopyableCode code="get_resource_collection" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-resource_collection_type"><code>resource_collection_type</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Returns lists Amazon Web Services resources that are of the specified resource collection type. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag key. You can specify up to 500 Amazon Web Services CloudFormation stacks.</td>
</tr>
<tr>
    <td><a href="#update_resource_collection"><CopyableCode code="update_resource_collection" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Action"><code>Action</code></a>, <a href="#parameter-ResourceCollection"><code>ResourceCollection</code></a></td>
    <td></td>
    <td>Updates the collection of resources that DevOps Guru analyzes. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag key. You can specify up to 500 Amazon Web Services CloudFormation stacks. This method also creates the IAM role required for you to use DevOps Guru.</td>
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
<tr id="parameter-resource_collection_type">
    <td><CopyableCode code="resource_collection_type" /></td>
    <td><code>string</code></td>
    <td>The type of Amazon Web Services resource collections to return. The one valid value is CLOUD_FORMATION for Amazon Web Services CloudFormation stacks.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_resource_collection"
    values={[
        { label: 'get_resource_collection', value: 'get_resource_collection' }
    ]}
>
<TabItem value="get_resource_collection">

Returns lists Amazon Web Services resources that are of the specified resource collection type. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag key. You can specify up to 500 Amazon Web Services CloudFormation stacks.

```sql
SELECT
CloudFormation,
Tags
FROM aws.devops_guru.resource_collections
WHERE resource_collection_type = '{{ resource_collection_type }}' -- required
AND region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_resource_collection"
    values={[
        { label: 'update_resource_collection', value: 'update_resource_collection' }
    ]}
>
<TabItem value="update_resource_collection">

Updates the collection of resources that DevOps Guru analyzes. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag key. You can specify up to 500 Amazon Web Services CloudFormation stacks. This method also creates the IAM role required for you to use DevOps Guru.

```sql
UPDATE aws.devops_guru.resource_collections
SET 
Action = '{{ Action }}',
ResourceCollection = '{{ ResourceCollection }}'
WHERE 
region = '{{ region }}' --required
AND Action = '{{ Action }}' --required
AND ResourceCollection = '{{ ResourceCollection }}' --required;
```
</TabItem>
</Tabs>

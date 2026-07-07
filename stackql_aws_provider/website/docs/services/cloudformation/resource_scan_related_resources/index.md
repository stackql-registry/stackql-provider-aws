--- 
title: resource_scan_related_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_scan_related_resources
  - cloudformation
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

Creates, updates, deletes, gets or lists a <code>resource_scan_related_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_scan_related_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudformation.resource_scan_related_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_resource_scan_related_resources"
    values={[
        { label: 'list_resource_scan_related_resources', value: 'list_resource_scan_related_resources' }
    ]}
>
<TabItem value="list_resource_scan_related_resources">

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
    <td><CopyableCode code="ManagedByStack" /></td>
    <td><code>boolean</code></td>
    <td>If true, the resource is managed by a CloudFormation stack.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceIdentifier" /></td>
    <td><code>string</code></td>
    <td>A list of up to 256 key-value pairs that identifies for the scanned resource. The key is the name of one of the primary identifiers for the resource. (Primary identifiers are specified in the primaryIdentifier list in the resource schema.) The value is the value of that primary identifier. For example, for a AWS::DynamoDB::Table resource, the primary identifiers is TableName so the key-value pair could be "TableName": "MyDDBTable". For more information, see primaryIdentifier in the CloudFormation Command Line Interface (CLI) User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceType" /></td>
    <td><code>string</code></td>
    <td>The type of the resource, such as AWS::DynamoDB::Table. For the list of supported resources, see Resource type support for imports and drift detection In the CloudFormation User Guide</td>
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
    <td><a href="#list_resource_scan_related_resources"><CopyableCode code="list_resource_scan_related_resources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ResourceScanId"><code>ResourceScanId</code></a>, <a href="#parameter-Resources"><code>Resources</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Lists the related resources for a list of resources from a resource scan. The response indicates whether each returned resource is already managed by CloudFormation.</td>
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
<tr id="parameter-ResourceScanId">
    <td><CopyableCode code="ResourceScanId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource scan.</td>
</tr>
<tr id="parameter-Resources">
    <td><CopyableCode code="Resources" /></td>
    <td><code>array</code></td>
    <td>The list of resources for which you want to get the related resources. Up to 100 resources can be provided.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>If the number of available results exceeds this maximum, the response includes a NextToken value that you can use for the NextToken parameter to get the next set of results. By default the ListResourceScanRelatedResources API action will return up to 100 results in each response. The maximum value is 100.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of items to return. (You received this token from a previous call.)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_resource_scan_related_resources"
    values={[
        { label: 'list_resource_scan_related_resources', value: 'list_resource_scan_related_resources' }
    ]}
>
<TabItem value="list_resource_scan_related_resources">

Lists the related resources for a list of resources from a resource scan. The response indicates whether each returned resource is already managed by CloudFormation.

```sql
SELECT
ManagedByStack,
ResourceIdentifier,
ResourceType
FROM aws.cloudformation.resource_scan_related_resources
WHERE ResourceScanId = '{{ ResourceScanId }}' -- required
AND Resources = '{{ Resources }}' -- required
AND region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>

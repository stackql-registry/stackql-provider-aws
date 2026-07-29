--- 
title: resource_scan_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_scan_resources
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

Creates, updates, deletes, gets or lists a <code>resource_scan_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_scan_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudformation.resource_scan_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_resource_scan_resources"
    values={[
        { label: 'list_resource_scan_resources', value: 'list_resource_scan_resources' }
    ]}
>
<TabItem value="list_resource_scan_resources">

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
    <td><CopyableCode code="managed_by_stack" /></td>
    <td><code>boolean</code></td>
    <td>If true, the resource is managed by a CloudFormation stack.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_identifier" /></td>
    <td><code>string</code></td>
    <td>A list of up to 256 key-value pairs that identifies for the scanned resource. The key is the name of one of the primary identifiers for the resource. (Primary identifiers are specified in the primaryIdentifier list in the resource schema.) The value is the value of that primary identifier. For example, for a AWS::DynamoDB::Table resource, the primary identifiers is TableName so the key-value pair could be "TableName": "MyDDBTable". For more information, see primaryIdentifier in the CloudFormation Command Line Interface (CLI) User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
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
    <td><a href="#list_resource_scan_resources"><CopyableCode code="list_resource_scan_resources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ResourceScanId"><code>ResourceScanId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ResourceIdentifier"><code>ResourceIdentifier</code></a>, <a href="#parameter-ResourceTypePrefix"><code>ResourceTypePrefix</code></a>, <a href="#parameter-TagKey"><code>TagKey</code></a>, <a href="#parameter-TagValue"><code>TagValue</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Lists the resources from a resource scan. The results can be filtered by resource identifier, resource type prefix, tag key, and tag value. Only resources that match all specified filters are returned. The response indicates whether each returned resource is already managed by CloudFormation.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>If the number of available results exceeds this maximum, the response includes a NextToken value that you can use for the NextToken parameter to get the next set of results. By default the ListResourceScanResources API action will return at most 100 results in each response. The maximum value is 100.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of items to return. (You received this token from a previous call.)</td>
</tr>
<tr id="parameter-ResourceIdentifier">
    <td><CopyableCode code="ResourceIdentifier" /></td>
    <td><code>string</code></td>
    <td>If specified, the returned resources will have the specified resource identifier (or one of them in the case where the resource has multiple identifiers).</td>
</tr>
<tr id="parameter-ResourceTypePrefix">
    <td><CopyableCode code="ResourceTypePrefix" /></td>
    <td><code>string</code></td>
    <td>If specified, the returned resources will be of any of the resource types with the specified prefix.</td>
</tr>
<tr id="parameter-TagKey">
    <td><CopyableCode code="TagKey" /></td>
    <td><code>string</code></td>
    <td>If specified, the returned resources will have a matching tag key.</td>
</tr>
<tr id="parameter-TagValue">
    <td><CopyableCode code="TagValue" /></td>
    <td><code>string</code></td>
    <td>If specified, the returned resources will have a matching tag value.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_resource_scan_resources"
    values={[
        { label: 'list_resource_scan_resources', value: 'list_resource_scan_resources' }
    ]}
>
<TabItem value="list_resource_scan_resources">

Lists the resources from a resource scan. The results can be filtered by resource identifier, resource type prefix, tag key, and tag value. Only resources that match all specified filters are returned. The response indicates whether each returned resource is already managed by CloudFormation.

```sql
SELECT
managed_by_stack,
resource_identifier,
resource_type
FROM aws.cloudformation.resource_scan_resources
WHERE ResourceScanId = '{{ ResourceScanId }}' -- required
AND region = '{{ region }}' -- required
AND ResourceIdentifier = '{{ ResourceIdentifier }}'
AND ResourceTypePrefix = '{{ ResourceTypePrefix }}'
AND TagKey = '{{ TagKey }}'
AND TagValue = '{{ TagValue }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>

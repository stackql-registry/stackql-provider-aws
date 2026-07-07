--- 
title: resources
hide_title: false
hide_table_of_contents: false
keywords:
  - resources
  - ram
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

Creates, updates, deletes, gets or lists a <code>resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ram.resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_resources"
    values={[
        { label: 'list_resources', value: 'list_resources' }
    ]}
>
<TabItem value="list_resources">

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
    <td>The Amazon Resource Name (ARN) of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the resource was associated with the resource share.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date an time when the association between the resource and the resource share was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceGroupArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource group. This value is available only if the resource is part of a resource group.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceRegionScope" /></td>
    <td><code>string</code></td>
    <td>Specifies the scope of visibility of this resource: REGIONAL – The resource can be accessed only by using requests that target the Amazon Web Services Region in which the resource exists. GLOBAL – The resource can be accessed from any Amazon Web Services Region. (REGIONAL, GLOBAL)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceShareArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource share this resource is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the resource. (AVAILABLE, ZONAL_RESOURCE_INACCESSIBLE, LIMIT_EXCEEDED, UNAVAILABLE, PENDING)</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>A message about the status of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The resource type. This takes the form of: service-code:resource-code, and is case-insensitive. For example, an Amazon EC2 Subnet would be represented by the string ec2:subnet.</td>
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
    <td><a href="#list_resources"><CopyableCode code="list_resources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the resources that you added to a resource share or the resources that are shared with you. Always check the NextToken response parameter for a null value when calling a paginated operation. These operations can occasionally return an empty set of results even when there are more results available. The NextToken response parameter value is null only when there are no more results to display.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_resources"
    values={[
        { label: 'list_resources', value: 'list_resources' }
    ]}
>
<TabItem value="list_resources">

Lists the resources that you added to a resource share or the resources that are shared with you. Always check the NextToken response parameter for a null value when calling a paginated operation. These operations can occasionally return an empty set of results even when there are more results available. The NextToken response parameter value is null only when there are no more results to display.

```sql
SELECT
arn,
creationTime,
lastUpdatedTime,
resourceGroupArn,
resourceRegionScope,
resourceShareArn,
status,
statusMessage,
type_
FROM aws.ram.resources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>

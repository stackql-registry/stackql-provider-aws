--- 
title: resource_share_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_share_associations
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

Creates, updates, deletes, gets or lists a <code>resource_share_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_share_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ram.resource_share_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resource_share_associations"
    values={[
        { label: 'get_resource_share_associations', value: 'get_resource_share_associations' }
    ]}
>
<TabItem value="get_resource_share_associations">

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
    <td><CopyableCode code="associatedEntity" /></td>
    <td><code>string</code></td>
    <td>The associated entity. This can be either of the following: For a resource association, this is the Amazon Resource Name (ARN) of the resource. For principal associations, this is one of the following: The ID of an Amazon Web Services account The Amazon Resource Name (ARN) of an organization in Organizations The ARN of an organizational unit (OU) in Organizations The ARN of an IAM role The ARN of an IAM user</td>
</tr>
<tr>
    <td><CopyableCode code="associationType" /></td>
    <td><code>string</code></td>
    <td>The type of entity included in this association. (PRINCIPAL, RESOURCE, SOURCE)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the association was created.</td>
</tr>
<tr>
    <td><CopyableCode code="external" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the principal belongs to the same organization in Organizations as the Amazon Web Services account that owns the resource share.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the association was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceShareArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource share.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceShareName" /></td>
    <td><code>string</code></td>
    <td>The name of the resource share.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the association. (ASSOCIATING, ASSOCIATED, FAILED, DISASSOCIATING, DISASSOCIATED, SUSPENDED, SUSPENDING, RESTORING)</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>A message about the status of the association.</td>
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
    <td><a href="#get_resource_share_associations"><CopyableCode code="get_resource_share_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the lists of resources and principals that associated for resource shares that you own. Always check the NextToken response parameter for a null value when calling a paginated operation. These operations can occasionally return an empty set of results even when there are more results available. The NextToken response parameter value is null only when there are no more results to display.</td>
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
    defaultValue="get_resource_share_associations"
    values={[
        { label: 'get_resource_share_associations', value: 'get_resource_share_associations' }
    ]}
>
<TabItem value="get_resource_share_associations">

Retrieves the lists of resources and principals that associated for resource shares that you own. Always check the NextToken response parameter for a null value when calling a paginated operation. These operations can occasionally return an empty set of results even when there are more results available. The NextToken response parameter value is null only when there are no more results to display.

```sql
SELECT
associatedEntity,
associationType,
creationTime,
external,
lastUpdatedTime,
resourceShareArn,
resourceShareName,
status,
statusMessage
FROM aws.ram.resource_share_associations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>

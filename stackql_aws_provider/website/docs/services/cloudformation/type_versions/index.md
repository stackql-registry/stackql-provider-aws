--- 
title: type_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - type_versions
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

Creates, updates, deletes, gets or lists a <code>type_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="type_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudformation.type_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_type_versions"
    values={[
        { label: 'list_type_versions', value: 'list_type_versions' }
    ]}
>
<TabItem value="list_type_versions">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the extension version.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the extension version.</td>
</tr>
<tr>
    <td><CopyableCode code="IsDefaultVersion" /></td>
    <td><code>boolean</code></td>
    <td>Whether the specified extension version is set as the default version. This applies only to private extensions you have registered in your account, and extensions published by Amazon. For public third-party extensions, CloudFormation returns null.</td>
</tr>
<tr>
    <td><CopyableCode code="PublicVersionNumber" /></td>
    <td><code>string</code></td>
    <td>For public extensions that have been activated for this account and Region, the version of the public extension to be used for CloudFormation operations in this account and Region. For any extensions other than activated third-party extensions, CloudFormation returns null. How you specified AutoUpdate when enabling the extension affects whether CloudFormation automatically updates the extension in this account and Region when a new version is released. For more information, see Automatically use new versions of extensions in the CloudFormation User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="TimeCreated" /></td>
    <td><code>string</code></td>
    <td>When the version was registered.</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The kind of extension.</td>
</tr>
<tr>
    <td><CopyableCode code="TypeName" /></td>
    <td><code>string</code></td>
    <td>The name of the extension.</td>
</tr>
<tr>
    <td><CopyableCode code="VersionId" /></td>
    <td><code>string</code></td>
    <td>The ID of a specific version of the extension. The version ID is the value at the end of the ARN assigned to the extension version when it's registered.</td>
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
    <td><a href="#list_type_versions"><CopyableCode code="list_type_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Type"><code>Type</code></a>, <a href="#parameter-TypeName"><code>TypeName</code></a>, <a href="#parameter-Arn"><code>Arn</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DeprecatedStatus"><code>DeprecatedStatus</code></a>, <a href="#parameter-PublisherId"><code>PublisherId</code></a></td>
    <td>Returns summary information about the versions of an extension.</td>
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
<tr id="parameter-Arn">
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the extension for which you want version summary information. Conditional: You must specify either TypeName and Type, or Arn.</td>
</tr>
<tr id="parameter-DeprecatedStatus">
    <td><CopyableCode code="DeprecatedStatus" /></td>
    <td><code>string</code></td>
    <td>The deprecation status of the extension versions that you want to get summary information about. Valid values include: LIVE: The extension version is registered and can be used in CloudFormation operations, dependent on its provisioning behavior and visibility scope. DEPRECATED: The extension version has been deregistered and can no longer be used in CloudFormation operations. The default is LIVE.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a NextToken value that you can assign to the NextToken request parameter to get the next set of results.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of items to return. (You received this token from a previous call.)</td>
</tr>
<tr id="parameter-PublisherId">
    <td><CopyableCode code="PublisherId" /></td>
    <td><code>string</code></td>
    <td>The publisher ID of the extension publisher. Extensions published by Amazon aren't assigned a publisher ID.</td>
</tr>
<tr id="parameter-Type">
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The kind of the extension. Conditional: You must specify either TypeName and Type, or Arn.</td>
</tr>
<tr id="parameter-TypeName">
    <td><CopyableCode code="TypeName" /></td>
    <td><code>string</code></td>
    <td>The name of the extension for which you want version summary information. Conditional: You must specify either TypeName and Type, or Arn.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_type_versions"
    values={[
        { label: 'list_type_versions', value: 'list_type_versions' }
    ]}
>
<TabItem value="list_type_versions">

Returns summary information about the versions of an extension.

```sql
SELECT
Arn,
Description,
IsDefaultVersion,
PublicVersionNumber,
TimeCreated,
Type,
TypeName,
VersionId
FROM aws.cloudformation.type_versions
WHERE region = '{{ region }}' -- required
AND Type = '{{ Type }}'
AND TypeName = '{{ TypeName }}'
AND Arn = '{{ Arn }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND DeprecatedStatus = '{{ DeprecatedStatus }}'
AND PublisherId = '{{ PublisherId }}'
;
```
</TabItem>
</Tabs>

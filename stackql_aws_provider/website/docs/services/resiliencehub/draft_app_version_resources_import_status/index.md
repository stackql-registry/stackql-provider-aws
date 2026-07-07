--- 
title: draft_app_version_resources_import_status
hide_title: false
hide_table_of_contents: false
keywords:
  - draft_app_version_resources_import_status
  - resiliencehub
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

Creates, updates, deletes, gets or lists a <code>draft_app_version_resources_import_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="draft_app_version_resources_import_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resiliencehub.draft_app_version_resources_import_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_draft_app_version_resources_import_status"
    values={[
        { label: 'describe_draft_app_version_resources_import_status', value: 'describe_draft_app_version_resources_import_status' }
    ]}
>
<TabItem value="describe_draft_app_version_resources_import_status">

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
    <td><CopyableCode code="appArn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;):&#91;0-9&#93;&#123;12&#125;:&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+.-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="appVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the application. (pattern: &lt;code&gt;^\S&#123;1,50&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="errorDetails" /></td>
    <td><code>array</code></td>
    <td>List of errors that were encountered while importing resources.</td>
</tr>
<tr>
    <td><CopyableCode code="errorMessage" /></td>
    <td><code>string</code></td>
    <td>The error message returned for the resource request.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the action. (Pending, InProgress, Failed, Success)</td>
</tr>
<tr>
    <td><CopyableCode code="statusChangeTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the status last changed.</td>
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
    <td><a href="#describe_draft_app_version_resources_import_status"><CopyableCode code="describe_draft_app_version_resources_import_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the status of importing resources to an application version. If you get a 404 error with ResourceImportStatusNotFoundAppMetadataException, you must call importResourcesToDraftAppVersion after creating the application and before calling describeDraftAppVersionResourcesImportStatus to obtain the status.</td>
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
    defaultValue="describe_draft_app_version_resources_import_status"
    values={[
        { label: 'describe_draft_app_version_resources_import_status', value: 'describe_draft_app_version_resources_import_status' }
    ]}
>
<TabItem value="describe_draft_app_version_resources_import_status">

Describes the status of importing resources to an application version. If you get a 404 error with ResourceImportStatusNotFoundAppMetadataException, you must call importResourcesToDraftAppVersion after creating the application and before calling describeDraftAppVersionResourcesImportStatus to obtain the status.

```sql
SELECT
appArn,
appVersion,
errorDetails,
errorMessage,
status,
statusChangeTime
FROM aws.resiliencehub.draft_app_version_resources_import_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>

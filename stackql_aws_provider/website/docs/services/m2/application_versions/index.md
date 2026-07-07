--- 
title: application_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - application_versions
  - m2
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

Creates, updates, deletes, gets or lists an <code>application_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="application_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.m2.application_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_application_version"
    values={[
        { label: 'get_application_version', value: 'get_application_version' },
        { label: 'list_application_versions', value: 'list_application_versions' }
    ]}
>
<TabItem value="get_application_version">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the application version. (pattern: &lt;code&gt;^&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_\-&#93;&#123;1,59&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="applicationVersion" /></td>
    <td><code>integer</code></td>
    <td>The specific version of the application.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the application version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="definitionContent" /></td>
    <td><code>string</code></td>
    <td>The content of the application definition. This is a JSON object that contains the resource configuration and definitions that identify an application.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The application description.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the application version. (Creating, Available, Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="statusReason" /></td>
    <td><code>string</code></td>
    <td>The reason for the reported status.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_application_versions">

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
    <td><CopyableCode code="applicationVersion" /></td>
    <td><code>integer</code></td>
    <td>The application version.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the application version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the application. (Creating, Available, Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="statusReason" /></td>
    <td><code>string</code></td>
    <td>The reason for the reported status.</td>
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
    <td><a href="#get_application_version"><CopyableCode code="get_application_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-application_version"><code>application_version</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns details about a specific version of a specific application.</td>
</tr>
<tr>
    <td><a href="#list_application_versions"><CopyableCode code="list_application_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of the application versions for a specific application.</td>
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
<tr id="parameter-application_id">
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the application.</td>
</tr>
<tr id="parameter-application_version">
    <td><CopyableCode code="application_version" /></td>
    <td><code>integer</code></td>
    <td>The specific version of the application.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of application versions to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token returned from a previous call to this operation. This specifies the next item to return. To return to the beginning of the list, exclude this parameter.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_application_version"
    values={[
        { label: 'get_application_version', value: 'get_application_version' },
        { label: 'list_application_versions', value: 'list_application_versions' }
    ]}
>
<TabItem value="get_application_version">

Returns details about a specific version of a specific application.

```sql
SELECT
name,
applicationVersion,
creationTime,
definitionContent,
description,
status,
statusReason
FROM aws.m2.application_versions
WHERE application_id = '{{ application_id }}' -- required
AND application_version = '{{ application_version }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_application_versions">

Returns a list of the application versions for a specific application.

```sql
SELECT
applicationVersion,
creationTime,
status,
statusReason
FROM aws.m2.application_versions
WHERE application_id = '{{ application_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>

--- 
title: associated_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - associated_resources
  - servicecatalog_appregistry
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

Creates, updates, deletes, gets or lists an <code>associated_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="associated_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.servicecatalog_appregistry.associated_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_associated_resource"
    values={[
        { label: 'get_associated_resource', value: 'get_associated_resource' },
        { label: 'list_associated_resources', value: 'list_associated_resources' }
    ]}
>
<TabItem value="get_associated_resource">

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
    <td><CopyableCode code="application_tag_result" /></td>
    <td><code>object</code></td>
    <td>The result of the application that's tag applied to a resource.</td>
</tr>
<tr>
    <td><CopyableCode code="options" /></td>
    <td><code>array</code></td>
    <td>Determines whether an application tag is applied or skipped.</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>object</code></td>
    <td>The resource associated with the application.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_associated_resources">

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
    <td>The name of the resource. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon resource name (ARN) that specifies the resource across services. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z0-9-&#93;*):(&#91;a-zA-Z0-9\-&#93;)+:(&#91;a-z&#93;&#123;2&#125;(-gov)?-&#91;a-z&#93;+-\d&#123;1&#125;)?:(\d&#123;12&#125;)?:(.*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="options" /></td>
    <td><code>array</code></td>
    <td>Determines whether an application tag is applied or skipped.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_details" /></td>
    <td><code>object</code></td>
    <td>The details related to the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>Provides information about the Service Catalog App Registry resource type. (CFN_STACK, RESOURCE_TAG_VALUE)</td>
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
    <td><a href="#get_associated_resource"><CopyableCode code="get_associated_resource" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application"><code>application</code></a>, <a href="#parameter-resource_type"><code>resource_type</code></a>, <a href="#parameter-resource"><code>resource</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-resourceTagStatus"><code>resourceTagStatus</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Gets the resource associated with the application.</td>
</tr>
<tr>
    <td><a href="#list_associated_resources"><CopyableCode code="list_associated_resources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application"><code>application</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists all of the resources that are associated with the specified application. Results are paginated. If you share an application, and a consumer account associates a tag query to the application, all of the users who can access the application can also view the tag values in all accounts that are associated with it using this API.</td>
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
<tr id="parameter-application">
    <td><CopyableCode code="application" /></td>
    <td><code>string</code></td>
    <td>The name, ID, or ARN of the application.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-resource">
    <td><CopyableCode code="resource" /></td>
    <td><code>string</code></td>
    <td>The name or ID of the resource associated with the application.</td>
</tr>
<tr id="parameter-resource_type">
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of resource associated with the application.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The upper bound of the number of results to return (cannot exceed 25). If this parameter is omitted, it defaults to 25. This value is optional.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to use to get the next page of results after a previous API call.</td>
</tr>
<tr id="parameter-resourceTagStatus">
    <td><CopyableCode code="resourceTagStatus" /></td>
    <td><code>array</code></td>
    <td>States whether an application tag is applied, not applied, in the process of being applied, or skipped.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_associated_resource"
    values={[
        { label: 'get_associated_resource', value: 'get_associated_resource' },
        { label: 'list_associated_resources', value: 'list_associated_resources' }
    ]}
>
<TabItem value="get_associated_resource">

Gets the resource associated with the application.

```sql
SELECT
application_tag_result,
options,
resource
FROM aws.servicecatalog_appregistry.associated_resources
WHERE application = '{{ application }}' -- required
AND resource_type = '{{ resource_type }}' -- required
AND resource = '{{ resource }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND resourceTagStatus = '{{ resourceTagStatus }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
<TabItem value="list_associated_resources">

Lists all of the resources that are associated with the specified application. Results are paginated. If you share an application, and a consumer account associates a tag query to the application, all of the users who can access the application can also view the tag values in all accounts that are associated with it using this API.

```sql
SELECT
name,
arn,
options,
resource_details,
resource_type
FROM aws.servicecatalog_appregistry.associated_resources
WHERE application = '{{ application }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>

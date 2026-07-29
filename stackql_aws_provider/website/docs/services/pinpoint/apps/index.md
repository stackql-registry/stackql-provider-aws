--- 
title: apps
hide_title: false
hide_table_of_contents: false
keywords:
  - apps
  - pinpoint
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

Creates, updates, deletes, gets or lists an <code>apps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="apps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint.apps" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_app"
    values={[
        { label: 'get_app', value: 'get_app' },
        { label: 'get_apps', value: 'get_apps' }
    ]}
>
<TabItem value="get_app">

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
    <td>The Amazon Resource Name (ARN) of the application.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string</code></td>
    <td>The date and time when the Application was created.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The display name of the application. This name is displayed as the Project name on the Amazon Pinpoint console.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A string-to-string map of key-value pairs that identifies the tags that are associated with the application. Each tag consists of a required tag key and an associated tag value.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_apps">

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
    <td><CopyableCode code="item" /></td>
    <td><code>array</code></td>
    <td>An array of responses, one for each application that was returned.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</td>
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
    <td><a href="#get_app"><CopyableCode code="get_app" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about an application.</td>
</tr>
<tr>
    <td><a href="#get_apps"><CopyableCode code="get_apps" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-page-size"><code>page-size</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td>Retrieves information about all the applications that are associated with your Amazon Pinpoint account.</td>
</tr>
<tr>
    <td><a href="#create_app"><CopyableCode code="create_app" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CreateApplicationRequest"><code>CreateApplicationRequest</code></a></td>
    <td></td>
    <td>Creates an application.</td>
</tr>
<tr>
    <td><a href="#delete_app"><CopyableCode code="delete_app" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an application.</td>
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
<tr id="parameter-application-id">
    <td><CopyableCode code="application-id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-page-size">
    <td><CopyableCode code="page-size" /></td>
    <td><code>string</code></td>
    <td>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</td>
</tr>
<tr id="parameter-token">
    <td><CopyableCode code="token" /></td>
    <td><code>string</code></td>
    <td>The NextToken string that specifies which page of results to return in a paginated response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_app"
    values={[
        { label: 'get_app', value: 'get_app' },
        { label: 'get_apps', value: 'get_apps' }
    ]}
>
<TabItem value="get_app">

Retrieves information about an application.

```sql
SELECT
arn,
creation_date,
id,
name,
tags
FROM aws.pinpoint.apps
WHERE `application-id` = '{{ application-id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_apps">

Retrieves information about all the applications that are associated with your Amazon Pinpoint account.

```sql
SELECT
item,
next_token
FROM aws.pinpoint.apps
WHERE region = '{{ region }}' -- required
AND `page-size` = '{{ page-size }}'
AND token = '{{ token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_app"
    values={[
        { label: 'create_app', value: 'create_app' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_app">

Creates an application.

```sql
INSERT INTO aws.pinpoint.apps (
CreateApplicationRequest,
region
)
SELECT 
'{{ CreateApplicationRequest }}' /* required */,
'{{ region }}'
RETURNING
application_response
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: apps
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the apps resource.
    - name: CreateApplicationRequest
      description: |
        Specifies the display name of an application and the tags to associate with the application.
      value:
        Name: "{{ Name }}"
        tags: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_app"
    values={[
        { label: 'delete_app', value: 'delete_app' }
    ]}
>
<TabItem value="delete_app">

Deletes an application.

```sql
DELETE FROM aws.pinpoint.apps
WHERE `application-id` = '{{ application-id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

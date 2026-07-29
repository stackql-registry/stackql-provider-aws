--- 
title: applications
hide_title: false
hide_table_of_contents: false
keywords:
  - applications
  - codedeploy
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

Creates, updates, deletes, gets or lists an <code>applications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="applications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codedeploy.applications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_applications"
    values={[
        { label: 'batch_get_applications', value: 'batch_get_applications' },
        { label: 'get_application', value: 'get_application' },
        { label: 'list_applications', value: 'list_applications' }
    ]}
>
<TabItem value="batch_get_applications">

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
    <td><CopyableCode code="applications_info" /></td>
    <td><code>array</code></td>
    <td>Information about the applications.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_application">

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
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The application ID.</td>
</tr>
<tr>
    <td><CopyableCode code="application_name" /></td>
    <td><code>string</code></td>
    <td>The application name.</td>
</tr>
<tr>
    <td><CopyableCode code="compute_platform" /></td>
    <td><code>string</code></td>
    <td>The destination platform type for deployment of the application (Lambda or Server). (Server, Lambda, ECS)</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the application was created.</td>
</tr>
<tr>
    <td><CopyableCode code="git_hub_account_name" /></td>
    <td><code>string</code></td>
    <td>The name for a connection to a GitHub account.</td>
</tr>
<tr>
    <td><CopyableCode code="linked_to_git_hub" /></td>
    <td><code>boolean</code></td>
    <td>True if the user has authenticated with GitHub for the specified application. Otherwise, false.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_applications">

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
    <td><CopyableCode code="application" /></td>
    <td><code>string</code></td>
    <td>A list of application names.</td>
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
    <td><a href="#batch_get_applications"><CopyableCode code="batch_get_applications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about one or more applications. The maximum number of applications that can be returned is 100.</td>
</tr>
<tr>
    <td><a href="#get_application"><CopyableCode code="get_application" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about an application.</td>
</tr>
<tr>
    <td><a href="#list_applications"><CopyableCode code="list_applications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the applications registered with the user or Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_application"><CopyableCode code="create_application" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-applicationName"><code>applicationName</code></a></td>
    <td></td>
    <td>Creates an application.</td>
</tr>
<tr>
    <td><a href="#update_application"><CopyableCode code="update_application" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Changes the name of an application.</td>
</tr>
<tr>
    <td><a href="#delete_application"><CopyableCode code="delete_application" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="batch_get_applications"
    values={[
        { label: 'batch_get_applications', value: 'batch_get_applications' },
        { label: 'get_application', value: 'get_application' },
        { label: 'list_applications', value: 'list_applications' }
    ]}
>
<TabItem value="batch_get_applications">

Gets information about one or more applications. The maximum number of applications that can be returned is 100.

```sql
SELECT
applications_info
FROM aws.codedeploy.applications
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_application">

Gets information about an application.

```sql
SELECT
application_id,
application_name,
compute_platform,
create_time,
git_hub_account_name,
linked_to_git_hub
FROM aws.codedeploy.applications
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_applications">

Lists the applications registered with the user or Amazon Web Services account.

```sql
SELECT
application
FROM aws.codedeploy.applications
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_application"
    values={[
        { label: 'create_application', value: 'create_application' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_application">

Creates an application.

```sql
INSERT INTO aws.codedeploy.applications (
applicationName,
computePlatform,
tags,
region
)
SELECT 
'{{ applicationName }}' /* required */,
'{{ computePlatform }}',
'{{ tags }}',
'{{ region }}'
RETURNING
application_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: applications
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the applications resource.
    - name: applicationName
      value: "{{ applicationName }}"
      description: |
        The name of the application. This name must be unique with the applicable user or Amazon Web Services account.
    - name: computePlatform
      value: "{{ computePlatform }}"
      description: |
        The destination platform type for the deployment (Lambda, Server, or ECS).
      valid_values: ['Server', 'Lambda', 'ECS']
    - name: tags
      description: |
        The metadata that you apply to CodeDeploy applications to help you organize and categorize them. Each tag consists of a key and an optional value, both of which you define.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_application"
    values={[
        { label: 'update_application', value: 'update_application' }
    ]}
>
<TabItem value="update_application">

Changes the name of an application.

```sql
UPDATE aws.codedeploy.applications
SET 
applicationName = '{{ applicationName }}',
newApplicationName = '{{ newApplicationName }}'
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_application"
    values={[
        { label: 'delete_application', value: 'delete_application' }
    ]}
>
<TabItem value="delete_application">

Deletes an application.

```sql
DELETE FROM aws.codedeploy.applications
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

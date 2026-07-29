--- 
title: directory_registrations
hide_title: false
hide_table_of_contents: false
keywords:
  - directory_registrations
  - pca_connector_ad
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

Creates, updates, deletes, gets or lists a <code>directory_registrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="directory_registrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pca_connector_ad.directory_registrations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_directory_registration"
    values={[
        { label: 'get_directory_registration', value: 'get_directory_registration' },
        { label: 'list_directory_registrations', value: 'list_directory_registrations' }
    ]}
>
<TabItem value="get_directory_registration">

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
    <td>The Amazon Resource Name (ARN) that was returned when you called CreateDirectoryRegistration. (pattern: &lt;code&gt;^arn:&#91;\w-&#93;+:pca-connector-ad:&#91;\w-&#93;+:&#91;0-9&#93;+:directory-registration\/d-&#91;0-9a-f&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the directory registration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="directory_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Active Directory. (pattern: &lt;code&gt;^d-&#91;0-9a-f&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the directory registration. (CREATING, ACTIVE, DELETING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>Additional information about the directory registration status if the status is failed. (DIRECTORY_ACCESS_DENIED, DIRECTORY_RESOURCE_NOT_FOUND, DIRECTORY_NOT_ACTIVE, DIRECTORY_NOT_REACHABLE, DIRECTORY_TYPE_NOT_SUPPORTED, INTERNAL_FAILURE)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the directory registration was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_directory_registrations">

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
    <td>The Amazon Resource Name (ARN) that was returned when you called CreateDirectoryRegistration. (pattern: &lt;code&gt;^arn:&#91;\w-&#93;+:pca-connector-ad:&#91;\w-&#93;+:&#91;0-9&#93;+:directory-registration\/d-&#91;0-9a-f&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the directory registration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="directory_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Active Directory. (pattern: &lt;code&gt;^d-&#91;0-9a-f&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the directory registration. (CREATING, ACTIVE, DELETING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>Additional information about the directory registration status if the status is failed. (DIRECTORY_ACCESS_DENIED, DIRECTORY_RESOURCE_NOT_FOUND, DIRECTORY_NOT_ACTIVE, DIRECTORY_NOT_REACHABLE, DIRECTORY_TYPE_NOT_SUPPORTED, INTERNAL_FAILURE)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the directory registration was updated.</td>
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
    <td><a href="#get_directory_registration"><CopyableCode code="get_directory_registration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-directory_registration_arn"><code>directory_registration_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>A structure that contains information about your directory registration.</td>
</tr>
<tr>
    <td><a href="#list_directory_registrations"><CopyableCode code="list_directory_registrations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Lists the directory registrations that you created by using the https:​//docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateDirectoryRegistration action.</td>
</tr>
<tr>
    <td><a href="#create_directory_registration"><CopyableCode code="create_directory_registration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DirectoryId"><code>DirectoryId</code></a></td>
    <td></td>
    <td>Creates a directory registration that authorizes communication between Amazon Web Services Private CA and an Active Directory</td>
</tr>
<tr>
    <td><a href="#delete_directory_registration"><CopyableCode code="delete_directory_registration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-directory_registration_arn"><code>directory_registration_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a directory registration. Deleting a directory registration deauthorizes Amazon Web Services Private CA with the directory.</td>
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
<tr id="parameter-directory_registration_arn">
    <td><CopyableCode code="directory_registration_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that was returned when you called CreateDirectoryRegistration.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>Use this parameter when paginating results to specify the maximum number of items to return in the response on each page. If additional items exist beyond the number you specify, the NextToken element is sent in the response. Use this NextToken value in a subsequent request to retrieve additional items.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>Use this parameter when paginating results in a subsequent request after you receive a response with truncated results. Set it to the value of the NextToken parameter from the response you just received.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_directory_registration"
    values={[
        { label: 'get_directory_registration', value: 'get_directory_registration' },
        { label: 'list_directory_registrations', value: 'list_directory_registrations' }
    ]}
>
<TabItem value="get_directory_registration">

A structure that contains information about your directory registration.

```sql
SELECT
arn,
created_at,
directory_id,
status,
status_reason,
updated_at
FROM aws.pca_connector_ad.directory_registrations
WHERE directory_registration_arn = '{{ directory_registration_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_directory_registrations">

Lists the directory registrations that you created by using the https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateDirectoryRegistration action.

```sql
SELECT
arn,
created_at,
directory_id,
status,
status_reason,
updated_at
FROM aws.pca_connector_ad.directory_registrations
WHERE region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_directory_registration"
    values={[
        { label: 'create_directory_registration', value: 'create_directory_registration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_directory_registration">

Creates a directory registration that authorizes communication between Amazon Web Services Private CA and an Active Directory

```sql
INSERT INTO aws.pca_connector_ad.directory_registrations (
ClientToken,
DirectoryId,
Tags,
region
)
SELECT 
'{{ ClientToken }}',
'{{ DirectoryId }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
directory_registration_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: directory_registrations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the directory_registrations resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: DirectoryId
      value: "{{ DirectoryId }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_directory_registration"
    values={[
        { label: 'delete_directory_registration', value: 'delete_directory_registration' }
    ]}
>
<TabItem value="delete_directory_registration">

Deletes a directory registration. Deleting a directory registration deauthorizes Amazon Web Services Private CA with the directory.

```sql
DELETE FROM aws.pca_connector_ad.directory_registrations
WHERE directory_registration_arn = '{{ directory_registration_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

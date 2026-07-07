--- 
title: applications
hide_title: false
hide_table_of_contents: false
keywords:
  - applications
  - opensearch
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.opensearch.applications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_application"
    values={[
        { label: 'get_application', value: 'get_application' },
        { label: 'list_applications', value: 'list_applications' }
    ]}
>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the OpenSearch application. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;3,30&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the OpenSearch application. (pattern: &lt;code&gt;&#91;a-z&#93;&#91;a-z0-9\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="appConfigs" /></td>
    <td><code>array</code></td>
    <td>The configuration settings of the OpenSearch application.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the domain. See Identifiers for IAM Entities in Using Amazon Web Services Identity and Access Management for more information. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the OpenSearch application was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataSources" /></td>
    <td><code>array</code></td>
    <td>The data sources associated with the OpenSearch application.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>The endpoint URL of the OpenSearch application.</td>
</tr>
<tr>
    <td><CopyableCode code="iamIdentityCenterOptions" /></td>
    <td><code>object</code></td>
    <td>The IAM Identity Center settings configured for the OpenSearch application.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the KMS key used to encrypt the application's data at rest. (pattern: &lt;code&gt;^arn:aws&#91;a-zA-Z-&#93;*:kms:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:key/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the last update to the OpenSearch application.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the OpenSearch application. Possible values: CREATING, UPDATING, DELETING, FAILED, ACTIVE, and DELETED. (CREATING, UPDATING, DELETING, ACTIVE, FAILED)</td>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of an OpenSearch application. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;3,30&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of an OpenSearch application. (pattern: &lt;code&gt;&#91;a-z&#93;&#91;a-z0-9\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the domain. See Identifiers for IAM Entities in Using Amazon Web Services Identity and Access Management for more information. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when an OpenSearch application was created.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>The endpoint URL of an OpenSearch application.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the last update to an OpenSearch application.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of an OpenSearch application. Possible values: CREATING, UPDATING, DELETING, FAILED, ACTIVE, and DELETED. (CREATING, UPDATING, DELETING, ACTIVE, FAILED)</td>
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
    <td><a href="#get_application"><CopyableCode code="get_application" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the configuration and status of an existing OpenSearch application.</td>
</tr>
<tr>
    <td><a href="#list_applications"><CopyableCode code="list_applications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-statuses"><code>statuses</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists all OpenSearch applications under your account.</td>
</tr>
<tr>
    <td><a href="#create_application"><CopyableCode code="create_application" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates an OpenSearch UI application. For more information, see Using the OpenSearch user interface in Amazon OpenSearch Service.</td>
</tr>
<tr>
    <td><a href="#update_application"><CopyableCode code="update_application" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the configuration and settings of an existing OpenSearch application.</td>
</tr>
<tr>
    <td><a href="#delete_application"><CopyableCode code="delete_application" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a specified OpenSearch application.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the OpenSearch application to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-statuses">
    <td><CopyableCode code="statuses" /></td>
    <td><code>array</code></td>
    <td>Filters the list of OpenSearch applications by status. Possible values: CREATING, UPDATING, DELETING, FAILED, ACTIVE, and DELETED.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_application"
    values={[
        { label: 'get_application', value: 'get_application' },
        { label: 'list_applications', value: 'list_applications' }
    ]}
>
<TabItem value="get_application">

Retrieves the configuration and status of an existing OpenSearch application.

```sql
SELECT
id,
name,
appConfigs,
arn,
createdAt,
dataSources,
endpoint,
iamIdentityCenterOptions,
kmsKeyArn,
lastUpdatedAt,
status
FROM aws.opensearch.applications
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_applications">

Lists all OpenSearch applications under your account.

```sql
SELECT
id,
name,
arn,
createdAt,
endpoint,
lastUpdatedAt,
status
FROM aws.opensearch.applications
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND statuses = '{{ statuses }}'
AND maxResults = '{{ maxResults }}'
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

Creates an OpenSearch UI application. For more information, see Using the OpenSearch user interface in Amazon OpenSearch Service.

```sql
INSERT INTO aws.opensearch.applications (
clientToken,
name,
dataSources,
iamIdentityCenterOptions,
appConfigs,
tagList,
kmsKeyArn,
region
)
SELECT 
'{{ clientToken }}',
'{{ name }}' /* required */,
'{{ dataSources }}',
'{{ iamIdentityCenterOptions }}',
'{{ appConfigs }}',
'{{ tagList }}',
'{{ kmsKeyArn }}',
'{{ region }}'
RETURNING
id,
name,
appConfigs,
arn,
createdAt,
dataSources,
iamIdentityCenterOptions,
kmsKeyArn,
tagList
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
    - name: clientToken
      value: "{{ clientToken }}"
    - name: name
      value: "{{ name }}"
    - name: dataSources
      value:
        - dataSourceArn: "{{ dataSourceArn }}"
          dataSourceDescription: "{{ dataSourceDescription }}"
          iamRoleForDataSourceArn: "{{ iamRoleForDataSourceArn }}"
    - name: iamIdentityCenterOptions
      description: |
        Configuration settings for enabling and managing IAM Identity Center.
      value:
        enabled: {{ enabled }}
        iamIdentityCenterInstanceArn: "{{ iamIdentityCenterInstanceArn }}"
        iamRoleForIdentityCenterApplicationArn: "{{ iamRoleForIdentityCenterApplicationArn }}"
    - name: appConfigs
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: tagList
      description: |
        A list of tags attached to a domain.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: kmsKeyArn
      value: "{{ kmsKeyArn }}"
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

Updates the configuration and settings of an existing OpenSearch application.

```sql
UPDATE aws.opensearch.applications
SET 
dataSources = '{{ dataSources }}',
appConfigs = '{{ appConfigs }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
name,
appConfigs,
arn,
createdAt,
dataSources,
iamIdentityCenterOptions,
lastUpdatedAt;
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

Deletes a specified OpenSearch application.

```sql
DELETE FROM aws.opensearch.applications
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

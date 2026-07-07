--- 
title: connector_v2s
hide_title: false
hide_table_of_contents: false
keywords:
  - connector_v2s
  - securityhub
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

Creates, updates, deletes, gets or lists a <code>connector_v2s</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connector_v2s" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityhub.connector_v2s" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_connector_v2"
    values={[
        { label: 'get_connector_v2', value: 'get_connector_v2' }
    ]}
>
<TabItem value="get_connector_v2">

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
    <td><CopyableCode code="ConnectorArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the connectorV2. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ConnectorId" /></td>
    <td><code>string</code></td>
    <td>The UUID of the connectorV2 to identify connectorV2 resource. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>ISO 8601 UTC timestamp for the time create the connectorV2.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the connectorV2. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Health" /></td>
    <td><code>object</code></td>
    <td>The current health status for connectorV2</td>
</tr>
<tr>
    <td><CopyableCode code="KmsKeyArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of KMS key used for the connectorV2. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>ISO 8601 UTC timestamp for the time update the connectorV2 connectorStatus.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the connectorV2. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ProviderDetail" /></td>
    <td><code>object</code></td>
    <td>The third-party provider detail for a service configuration.</td>
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
    <td><a href="#get_connector_v2"><CopyableCode code="get_connector_v2" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-connector_id"><code>connector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Grants permission to retrieve details for a connectorV2 based on connector id.</td>
</tr>
<tr>
    <td><a href="#register_connector_v2"><CopyableCode code="register_connector_v2" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AuthCode"><code>AuthCode</code></a>, <a href="#parameter-AuthState"><code>AuthState</code></a></td>
    <td></td>
    <td>Grants permission to complete the authorization based on input parameters.</td>
</tr>
<tr>
    <td><a href="#create_connector_v2"><CopyableCode code="create_connector_v2" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Provider"><code>Provider</code></a></td>
    <td></td>
    <td>Grants permission to create a connectorV2 based on input parameters.</td>
</tr>
<tr>
    <td><a href="#update_connector_v2"><CopyableCode code="update_connector_v2" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-connector_id"><code>connector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Grants permission to update a connectorV2 based on its id and input parameters.</td>
</tr>
<tr>
    <td><a href="#delete_connector_v2"><CopyableCode code="delete_connector_v2" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-connector_id"><code>connector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Grants permission to delete a connectorV2.</td>
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
<tr id="parameter-connector_id">
    <td><CopyableCode code="connector_id" /></td>
    <td><code>string</code></td>
    <td>The UUID of the connectorV2 to identify connectorV2 resource.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_connector_v2"
    values={[
        { label: 'get_connector_v2', value: 'get_connector_v2' }
    ]}
>
<TabItem value="get_connector_v2">

Grants permission to retrieve details for a connectorV2 based on connector id.

```sql
SELECT
ConnectorArn,
ConnectorId,
CreatedAt,
Description,
Health,
KmsKeyArn,
LastUpdatedAt,
Name,
ProviderDetail
FROM aws.securityhub.connector_v2s
WHERE connector_id = '{{ connector_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_connector_v2"
    values={[
        { label: 'register_connector_v2', value: 'register_connector_v2' },
        { label: 'create_connector_v2', value: 'create_connector_v2' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_connector_v2">

Grants permission to complete the authorization based on input parameters.

```sql
INSERT INTO aws.securityhub.connector_v2s (
AuthCode,
AuthState,
region
)
SELECT 
'{{ AuthCode }}' /* required */,
'{{ AuthState }}' /* required */,
'{{ region }}'
RETURNING
ConnectorArn,
ConnectorId
;
```
</TabItem>
<TabItem value="create_connector_v2">

Grants permission to create a connectorV2 based on input parameters.

```sql
INSERT INTO aws.securityhub.connector_v2s (
Name,
Description,
Provider,
KmsKeyArn,
Tags,
ClientToken,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ Provider }}' /* required */,
'{{ KmsKeyArn }}',
'{{ Tags }}',
'{{ ClientToken }}',
'{{ region }}'
RETURNING
AuthUrl,
ConnectorArn,
ConnectorId,
ConnectorStatus
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: connector_v2s
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the connector_v2s resource.
    - name: AuthCode
      value: "{{ AuthCode }}"
    - name: AuthState
      value: "{{ AuthState }}"
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
    - name: Provider
      description: |
        The initial configuration settings required to establish an integration between Security Hub and third-party provider.
      value:
        JiraCloud:
          ProjectKey: "{{ ProjectKey }}"
        ServiceNow:
          InstanceName: "{{ InstanceName }}"
          SecretArn: "{{ SecretArn }}"
    - name: KmsKeyArn
      value: "{{ KmsKeyArn }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_connector_v2"
    values={[
        { label: 'update_connector_v2', value: 'update_connector_v2' }
    ]}
>
<TabItem value="update_connector_v2">

Grants permission to update a connectorV2 based on its id and input parameters.

```sql
UPDATE aws.securityhub.connector_v2s
SET 
Description = '{{ Description }}',
Provider = '{{ Provider }}'
WHERE 
connector_id = '{{ connector_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_connector_v2"
    values={[
        { label: 'delete_connector_v2', value: 'delete_connector_v2' }
    ]}
>
<TabItem value="delete_connector_v2">

Grants permission to delete a connectorV2.

```sql
DELETE FROM aws.securityhub.connector_v2s
WHERE connector_id = '{{ connector_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

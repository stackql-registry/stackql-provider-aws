--- 
title: glue_identity_center_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - glue_identity_center_configurations
  - glue
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

Creates, updates, deletes, gets or lists a <code>glue_identity_center_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="glue_identity_center_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.glue_identity_center_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_glue_identity_center_configuration"
    values={[
        { label: 'get_glue_identity_center_configuration', value: 'get_glue_identity_center_configuration' }
    ]}
>
<TabItem value="get_glue_identity_center_configuration">

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
    <td><CopyableCode code="ApplicationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Identity Center application associated with the Glue configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Identity Center instance associated with the Glue configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="Scopes" /></td>
    <td><code>array</code></td>
    <td>A list of Identity Center scopes that define the permissions and access levels for the Glue configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="UserBackgroundSessionsEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether users can run background sessions when using Identity Center authentication with Glue services.</td>
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
    <td><a href="#get_glue_identity_center_configuration"><CopyableCode code="get_glue_identity_center_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the current Glue Identity Center configuration details, including the associated Identity Center instance and application information.</td>
</tr>
<tr>
    <td><a href="#create_glue_identity_center_configuration"><CopyableCode code="create_glue_identity_center_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceArn"><code>InstanceArn</code></a></td>
    <td></td>
    <td>Creates a new Glue Identity Center configuration to enable integration between Glue and Amazon Web Services IAM Identity Center for authentication and authorization.</td>
</tr>
<tr>
    <td><a href="#update_glue_identity_center_configuration"><CopyableCode code="update_glue_identity_center_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the existing Glue Identity Center configuration, allowing modification of scopes and permissions for the integration.</td>
</tr>
<tr>
    <td><a href="#delete_glue_identity_center_configuration"><CopyableCode code="delete_glue_identity_center_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the existing Glue Identity Center configuration, removing the integration between Glue and Amazon Web Services IAM Identity Center.</td>
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
    defaultValue="get_glue_identity_center_configuration"
    values={[
        { label: 'get_glue_identity_center_configuration', value: 'get_glue_identity_center_configuration' }
    ]}
>
<TabItem value="get_glue_identity_center_configuration">

Retrieves the current Glue Identity Center configuration details, including the associated Identity Center instance and application information.

```sql
SELECT
ApplicationArn,
InstanceArn,
Scopes,
UserBackgroundSessionsEnabled
FROM aws.glue.glue_identity_center_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_glue_identity_center_configuration"
    values={[
        { label: 'create_glue_identity_center_configuration', value: 'create_glue_identity_center_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_glue_identity_center_configuration">

Creates a new Glue Identity Center configuration to enable integration between Glue and Amazon Web Services IAM Identity Center for authentication and authorization.

```sql
INSERT INTO aws.glue.glue_identity_center_configurations (
InstanceArn,
Scopes,
UserBackgroundSessionsEnabled,
region
)
SELECT 
'{{ InstanceArn }}' /* required */,
'{{ Scopes }}',
{{ UserBackgroundSessionsEnabled }},
'{{ region }}'
RETURNING
ApplicationArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: glue_identity_center_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the glue_identity_center_configurations resource.
    - name: InstanceArn
      value: "{{ InstanceArn }}"
      description: |
        The Amazon Resource Name (ARN) of the Identity Center instance to be associated with the Glue configuration.
    - name: Scopes
      value:
        - "{{ Scopes }}"
      description: |
        A list of Identity Center scopes that define the permissions and access levels for the Glue configuration.
    - name: UserBackgroundSessionsEnabled
      value: {{ UserBackgroundSessionsEnabled }}
      description: |
        Specifies whether users can run background sessions when using Identity Center authentication with Glue services.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_glue_identity_center_configuration"
    values={[
        { label: 'update_glue_identity_center_configuration', value: 'update_glue_identity_center_configuration' }
    ]}
>
<TabItem value="update_glue_identity_center_configuration">

Updates the existing Glue Identity Center configuration, allowing modification of scopes and permissions for the integration.

```sql
UPDATE aws.glue.glue_identity_center_configurations
SET 
Scopes = '{{ Scopes }}',
UserBackgroundSessionsEnabled = {{ UserBackgroundSessionsEnabled }}
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_glue_identity_center_configuration"
    values={[
        { label: 'delete_glue_identity_center_configuration', value: 'delete_glue_identity_center_configuration' }
    ]}
>
<TabItem value="delete_glue_identity_center_configuration">

Deletes the existing Glue Identity Center configuration, removing the integration between Glue and Amazon Web Services IAM Identity Center.

```sql
DELETE FROM aws.glue.glue_identity_center_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

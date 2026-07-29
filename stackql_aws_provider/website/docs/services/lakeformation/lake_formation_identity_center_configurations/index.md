--- 
title: lake_formation_identity_center_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - lake_formation_identity_center_configurations
  - lakeformation
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

Creates, updates, deletes, gets or lists a <code>lake_formation_identity_center_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="lake_formation_identity_center_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lakeformation.lake_formation_identity_center_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_lake_formation_identity_center_configuration"
    values={[
        { label: 'describe_lake_formation_identity_center_configuration', value: 'describe_lake_formation_identity_center_configuration' }
    ]}
>
<TabItem value="describe_lake_formation_identity_center_configuration">

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
    <td><CopyableCode code="application_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Lake Formation application integrated with IAM Identity Center.</td>
</tr>
<tr>
    <td><CopyableCode code="catalog_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="external_filtering" /></td>
    <td><code>object</code></td>
    <td>Configuration for enabling external data filtering for third-party applications to access data managed by Lake Formation .</td>
</tr>
<tr>
    <td><CopyableCode code="instance_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the connection.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_share" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the RAM share.</td>
</tr>
<tr>
    <td><CopyableCode code="service_integrations" /></td>
    <td><code>array</code></td>
    <td>A list of service integrations for trusted identity propagation.</td>
</tr>
<tr>
    <td><CopyableCode code="share_recipients" /></td>
    <td><code>array</code></td>
    <td>A list of Amazon Web Services account IDs or Amazon Web Services organization/organizational unit ARNs that are allowed to access data managed by Lake Formation. If the ShareRecipients list includes valid values, a resource share is created with the principals you want to have access to the resources as the ShareRecipients. If the ShareRecipients value is null or the list is empty, no resource share is created.</td>
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
    <td><a href="#describe_lake_formation_identity_center_configuration"><CopyableCode code="describe_lake_formation_identity_center_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the instance ARN and application ARN for the connection.</td>
</tr>
<tr>
    <td><a href="#create_lake_formation_identity_center_configuration"><CopyableCode code="create_lake_formation_identity_center_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates an IAM Identity Center connection with Lake Formation to allow IAM Identity Center users and groups to access Data Catalog resources.</td>
</tr>
<tr>
    <td><a href="#update_lake_formation_identity_center_configuration"><CopyableCode code="update_lake_formation_identity_center_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the IAM Identity Center connection parameters.</td>
</tr>
<tr>
    <td><a href="#delete_lake_formation_identity_center_configuration"><CopyableCode code="delete_lake_formation_identity_center_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an IAM Identity Center connection with Lake Formation.</td>
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
    defaultValue="describe_lake_formation_identity_center_configuration"
    values={[
        { label: 'describe_lake_formation_identity_center_configuration', value: 'describe_lake_formation_identity_center_configuration' }
    ]}
>
<TabItem value="describe_lake_formation_identity_center_configuration">

Retrieves the instance ARN and application ARN for the connection.

```sql
SELECT
application_arn,
catalog_id,
external_filtering,
instance_arn,
resource_share,
service_integrations,
share_recipients
FROM aws.lakeformation.lake_formation_identity_center_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_lake_formation_identity_center_configuration"
    values={[
        { label: 'create_lake_formation_identity_center_configuration', value: 'create_lake_formation_identity_center_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_lake_formation_identity_center_configuration">

Creates an IAM Identity Center connection with Lake Formation to allow IAM Identity Center users and groups to access Data Catalog resources.

```sql
INSERT INTO aws.lakeformation.lake_formation_identity_center_configurations (
CatalogId,
InstanceArn,
ExternalFiltering,
ShareRecipients,
ServiceIntegrations,
region
)
SELECT 
'{{ CatalogId }}',
'{{ InstanceArn }}',
'{{ ExternalFiltering }}',
'{{ ShareRecipients }}',
'{{ ServiceIntegrations }}',
'{{ region }}'
RETURNING
application_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: lake_formation_identity_center_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the lake_formation_identity_center_configurations resource.
    - name: CatalogId
      value: "{{ CatalogId }}"
    - name: InstanceArn
      value: "{{ InstanceArn }}"
    - name: ExternalFiltering
      description: |
        Configuration for enabling external data filtering for third-party applications to access data managed by Lake Formation .
      value:
        Status: "{{ Status }}"
        AuthorizedTargets:
          - "{{ AuthorizedTargets }}"
    - name: ShareRecipients
      value:
        - DataLakePrincipalIdentifier: "{{ DataLakePrincipalIdentifier }}"
    - name: ServiceIntegrations
      description: |
        A list of service integrations for trusted identity propagation.
      value:
        - Redshift: "{{ Redshift }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_lake_formation_identity_center_configuration"
    values={[
        { label: 'update_lake_formation_identity_center_configuration', value: 'update_lake_formation_identity_center_configuration' }
    ]}
>
<TabItem value="update_lake_formation_identity_center_configuration">

Updates the IAM Identity Center connection parameters.

```sql
UPDATE aws.lakeformation.lake_formation_identity_center_configurations
SET 
CatalogId = '{{ CatalogId }}',
ShareRecipients = '{{ ShareRecipients }}',
ServiceIntegrations = '{{ ServiceIntegrations }}',
ApplicationStatus = '{{ ApplicationStatus }}',
ExternalFiltering = '{{ ExternalFiltering }}'
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_lake_formation_identity_center_configuration"
    values={[
        { label: 'delete_lake_formation_identity_center_configuration', value: 'delete_lake_formation_identity_center_configuration' }
    ]}
>
<TabItem value="delete_lake_formation_identity_center_configuration">

Deletes an IAM Identity Center connection with Lake Formation.

```sql
DELETE FROM aws.lakeformation.lake_formation_identity_center_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

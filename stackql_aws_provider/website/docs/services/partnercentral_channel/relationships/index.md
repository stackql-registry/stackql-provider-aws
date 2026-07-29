--- 
title: relationships
hide_title: false
hide_table_of_contents: false
keywords:
  - relationships
  - partnercentral_channel
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

Creates, updates, deletes, gets or lists a <code>relationships</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="relationships" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.partnercentral_channel.relationships" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_relationship"
    values={[
        { label: 'get_relationship', value: 'get_relationship' },
        { label: 'list_relationships', value: 'list_relationships' }
    ]}
>
<TabItem value="get_relationship">

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
    <td>The unique identifier of the relationship. (pattern: &lt;code&gt;rs-&#91;a-z0-9&#93;&#123;13&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the relationship.</td>
</tr>
<tr>
    <td><CopyableCode code="associated_account_id" /></td>
    <td><code>string</code></td>
    <td>The AWS account ID associated in this relationship. (pattern: &lt;code&gt;&#91;0-9&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="association_type" /></td>
    <td><code>string</code></td>
    <td>The type of association for the relationship. (DOWNSTREAM_SELLER, END_CUSTOMER, INTERNAL)</td>
</tr>
<tr>
    <td><CopyableCode code="catalog" /></td>
    <td><code>string</code></td>
    <td>The catalog identifier associated with the relationship. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the relationship was created.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the relationship. (pattern: &lt;code&gt;&#91;^\x00-\x1F\x7F&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="program_management_account_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the program management account. (pattern: &lt;code&gt;pma-&#91;a-z0-9&#93;&#123;13&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resale_account_model" /></td>
    <td><code>string</code></td>
    <td>The resale account model for the relationship. (DISTRIBUTOR, END_CUSTOMER, SOLUTION_PROVIDER)</td>
</tr>
<tr>
    <td><CopyableCode code="revision" /></td>
    <td><code>string</code></td>
    <td>The current revision number of the relationship. (pattern: &lt;code&gt;&#91;0-9&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sector" /></td>
    <td><code>string</code></td>
    <td>The business sector for the relationship. (COMMERCIAL, GOVERNMENT, GOVERNMENT_EXCEPTION)</td>
</tr>
<tr>
    <td><CopyableCode code="start_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start date of the relationship.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the relationship was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_relationships">

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
    <td>The unique identifier of the relationship. (pattern: &lt;code&gt;rs-&#91;a-z0-9&#93;&#123;13&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the relationship.</td>
</tr>
<tr>
    <td><CopyableCode code="associated_account_id" /></td>
    <td><code>string</code></td>
    <td>The AWS account ID associated in this relationship. (pattern: &lt;code&gt;&#91;0-9&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="association_type" /></td>
    <td><code>string</code></td>
    <td>The type of association for the relationship. (DOWNSTREAM_SELLER, END_CUSTOMER, INTERNAL)</td>
</tr>
<tr>
    <td><CopyableCode code="catalog" /></td>
    <td><code>string</code></td>
    <td>The catalog identifier associated with the relationship. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the relationship was created.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the relationship. (pattern: &lt;code&gt;&#91;^\x00-\x1F\x7F&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="program_management_account_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the program management account. (pattern: &lt;code&gt;pma-&#91;a-z0-9&#93;&#123;13&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="revision" /></td>
    <td><code>string</code></td>
    <td>The current revision number of the relationship. (pattern: &lt;code&gt;&#91;0-9&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sector" /></td>
    <td><code>string</code></td>
    <td>The business sector for the relationship. (COMMERCIAL, GOVERNMENT, GOVERNMENT_EXCEPTION)</td>
</tr>
<tr>
    <td><CopyableCode code="start_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start date of the relationship.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the relationship was last updated.</td>
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
    <td><a href="#get_relationship"><CopyableCode code="get_relationship" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details of a specific partner relationship.</td>
</tr>
<tr>
    <td><a href="#list_relationships"><CopyableCode code="list_relationships" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists partner relationships based on specified criteria.</td>
</tr>
<tr>
    <td><a href="#create_relationship"><CopyableCode code="create_relationship" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-catalog"><code>catalog</code></a>, <a href="#parameter-associationType"><code>associationType</code></a>, <a href="#parameter-programManagementAccountIdentifier"><code>programManagementAccountIdentifier</code></a>, <a href="#parameter-associatedAccountId"><code>associatedAccountId</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-sector"><code>sector</code></a></td>
    <td></td>
    <td>Creates a new partner relationship between accounts.</td>
</tr>
<tr>
    <td><a href="#update_relationship"><CopyableCode code="update_relationship" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-catalog"><code>catalog</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-programManagementAccountIdentifier"><code>programManagementAccountIdentifier</code></a></td>
    <td></td>
    <td>Updates the properties of a partner relationship.</td>
</tr>
<tr>
    <td><a href="#delete_relationship"><CopyableCode code="delete_relationship" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a partner relationship.</td>
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
    defaultValue="get_relationship"
    values={[
        { label: 'get_relationship', value: 'get_relationship' },
        { label: 'list_relationships', value: 'list_relationships' }
    ]}
>
<TabItem value="get_relationship">

Retrieves details of a specific partner relationship.

```sql
SELECT
id,
arn,
associated_account_id,
association_type,
catalog,
created_at,
display_name,
program_management_account_id,
resale_account_model,
revision,
sector,
start_date,
updated_at
FROM aws.partnercentral_channel.relationships
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_relationships">

Lists partner relationships based on specified criteria.

```sql
SELECT
id,
arn,
associated_account_id,
association_type,
catalog,
created_at,
display_name,
program_management_account_id,
revision,
sector,
start_date,
updated_at
FROM aws.partnercentral_channel.relationships
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_relationship"
    values={[
        { label: 'create_relationship', value: 'create_relationship' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_relationship">

Creates a new partner relationship between accounts.

```sql
INSERT INTO aws.partnercentral_channel.relationships (
catalog,
associationType,
programManagementAccountIdentifier,
associatedAccountId,
displayName,
resaleAccountModel,
sector,
clientToken,
tags,
requestedSupportPlan,
region
)
SELECT 
'{{ catalog }}' /* required */,
'{{ associationType }}' /* required */,
'{{ programManagementAccountIdentifier }}' /* required */,
'{{ associatedAccountId }}' /* required */,
'{{ displayName }}' /* required */,
'{{ resaleAccountModel }}',
'{{ sector }}' /* required */,
'{{ clientToken }}',
'{{ tags }}',
'{{ requestedSupportPlan }}',
'{{ region }}'
RETURNING
relationship_detail
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: relationships
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the relationships resource.
    - name: catalog
      value: "{{ catalog }}"
      description: |
        The catalog identifier for the relationship.
    - name: associationType
      value: "{{ associationType }}"
      description: |
        The type of association for the relationship (e.g., reseller, distributor).
      valid_values: ['DOWNSTREAM_SELLER', 'END_CUSTOMER', 'INTERNAL']
    - name: programManagementAccountIdentifier
      value: "{{ programManagementAccountIdentifier }}"
      description: |
        The identifier of the program management account for this relationship.
    - name: associatedAccountId
      value: "{{ associatedAccountId }}"
      description: |
        The AWS account ID to associate in this relationship.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        A human-readable name for the relationship.
    - name: resaleAccountModel
      value: "{{ resaleAccountModel }}"
      description: |
        The resale account model for the relationship.
      valid_values: ['DISTRIBUTOR', 'END_CUSTOMER', 'SOLUTION_PROVIDER']
    - name: sector
      value: "{{ sector }}"
      description: |
        The business sector for the relationship.
      valid_values: ['COMMERCIAL', 'GOVERNMENT', 'GOVERNMENT_EXCEPTION']
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        A unique, case-sensitive identifier to ensure idempotency of the request.
    - name: tags
      description: |
        Key-value pairs to associate with the relationship.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: requestedSupportPlan
      description: |
        The support plan requested for this relationship.
      value:
        resoldEnterprise:
          coverage: "{{ coverage }}"
          tamLocation: "{{ tamLocation }}"
          chargeAccountId: "{{ chargeAccountId }}"
        partnerLedSupport:
          coverage: "{{ coverage }}"
          provider: "{{ provider }}"
          tamLocation: "{{ tamLocation }}"
        resoldUnifiedOperations:
          coverage: "{{ coverage }}"
          tamLocation: "{{ tamLocation }}"
          chargeAccountId: "{{ chargeAccountId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_relationship"
    values={[
        { label: 'update_relationship', value: 'update_relationship' }
    ]}
>
<TabItem value="update_relationship">

Updates the properties of a partner relationship.

```sql
UPDATE aws.partnercentral_channel.relationships
SET 
catalog = '{{ catalog }}',
identifier = '{{ identifier }}',
programManagementAccountIdentifier = '{{ programManagementAccountIdentifier }}',
revision = '{{ revision }}',
displayName = '{{ displayName }}',
requestedSupportPlan = '{{ requestedSupportPlan }}'
WHERE 
region = '{{ region }}' --required
AND catalog = '{{ catalog }}' --required
AND identifier = '{{ identifier }}' --required
AND programManagementAccountIdentifier = '{{ programManagementAccountIdentifier }}' --required
RETURNING
relationship_detail;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_relationship"
    values={[
        { label: 'delete_relationship', value: 'delete_relationship' }
    ]}
>
<TabItem value="delete_relationship">

Deletes a partner relationship.

```sql
DELETE FROM aws.partnercentral_channel.relationships
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

--- 
title: data_lake_organization_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - data_lake_organization_configurations
  - securitylake
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

Creates, updates, deletes, gets or lists a <code>data_lake_organization_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_lake_organization_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securitylake.data_lake_organization_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_lake_organization_configuration"
    values={[
        { label: 'get_data_lake_organization_configuration', value: 'get_data_lake_organization_configuration' }
    ]}
>
<TabItem value="get_data_lake_organization_configuration">

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
    <td><CopyableCode code="autoEnableNewAccount" /></td>
    <td><code>array</code></td>
    <td>The configuration used for new accounts in Security Lake.</td>
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
    <td><a href="#get_data_lake_organization_configuration"><CopyableCode code="get_data_lake_organization_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the configuration that will be automatically set up for accounts added to the organization after the organization has onboarded to Amazon Security Lake. This API does not take input parameters.</td>
</tr>
<tr>
    <td><a href="#create_data_lake_organization_configuration"><CopyableCode code="create_data_lake_organization_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Automatically enables Amazon Security Lake for new member accounts in your organization. Security Lake is not automatically enabled for any existing member accounts in your organization. This operation merges the new data lake organization configuration with the existing configuration for Security Lake in your organization. If you want to create a new data lake organization configuration, you must delete the existing one using DeleteDataLakeOrganizationConfiguration.</td>
</tr>
<tr>
    <td><a href="#delete_data_lake_organization_configuration"><CopyableCode code="delete_data_lake_organization_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Turns off automatic enablement of Amazon Security Lake for member accounts that are added to an organization in Organizations. Only the delegated Security Lake administrator for an organization can perform this operation. If the delegated Security Lake administrator performs this operation, new member accounts won't automatically contribute data to the data lake.</td>
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
    defaultValue="get_data_lake_organization_configuration"
    values={[
        { label: 'get_data_lake_organization_configuration', value: 'get_data_lake_organization_configuration' }
    ]}
>
<TabItem value="get_data_lake_organization_configuration">

Retrieves the configuration that will be automatically set up for accounts added to the organization after the organization has onboarded to Amazon Security Lake. This API does not take input parameters.

```sql
SELECT
autoEnableNewAccount
FROM aws.securitylake.data_lake_organization_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_data_lake_organization_configuration"
    values={[
        { label: 'create_data_lake_organization_configuration', value: 'create_data_lake_organization_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_data_lake_organization_configuration">

Automatically enables Amazon Security Lake for new member accounts in your organization. Security Lake is not automatically enabled for any existing member accounts in your organization. This operation merges the new data lake organization configuration with the existing configuration for Security Lake in your organization. If you want to create a new data lake organization configuration, you must delete the existing one using DeleteDataLakeOrganizationConfiguration.

```sql
INSERT INTO aws.securitylake.data_lake_organization_configurations (
autoEnableNewAccount,
region
)
SELECT 
'{{ autoEnableNewAccount }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_lake_organization_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the data_lake_organization_configurations resource.
    - name: autoEnableNewAccount
      value:
        - region: "{{ region }}"
          sources: "{{ sources }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_data_lake_organization_configuration"
    values={[
        { label: 'delete_data_lake_organization_configuration', value: 'delete_data_lake_organization_configuration' }
    ]}
>
<TabItem value="delete_data_lake_organization_configuration">

Turns off automatic enablement of Amazon Security Lake for member accounts that are added to an organization in Organizations. Only the delegated Security Lake administrator for an organization can perform this operation. If the delegated Security Lake administrator performs this operation, new member accounts won't automatically contribute data to the data lake.

```sql
DELETE FROM aws.securitylake.data_lake_organization_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

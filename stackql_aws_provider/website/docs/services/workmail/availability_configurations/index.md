--- 
title: availability_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - availability_configurations
  - workmail
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

Creates, updates, deletes, gets or lists an <code>availability_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="availability_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workmail.availability_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_availability_configurations"
    values={[
        { label: 'list_availability_configurations', value: 'list_availability_configurations' }
    ]}
>
<TabItem value="list_availability_configurations">

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
    <td><CopyableCode code="date_created" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the availability configuration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="date_modified" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the availability configuration was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>Displays the domain to which the provider applies. (pattern: &lt;code&gt;&#91;a-zA-Z0-9.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ews_provider" /></td>
    <td><code>object</code></td>
    <td>If ProviderType is EWS, then this field contains RedactedEwsAvailabilityProvider. Otherwise, it is not required.</td>
</tr>
<tr>
    <td><CopyableCode code="lambda_provider" /></td>
    <td><code>object</code></td>
    <td>If ProviderType is LAMBDA then this field contains LambdaAvailabilityProvider. Otherwise, it is not required.</td>
</tr>
<tr>
    <td><CopyableCode code="provider_type" /></td>
    <td><code>string</code></td>
    <td>Displays the provider type that applies to this domain. (EWS, LAMBDA)</td>
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
    <td><a href="#list_availability_configurations"><CopyableCode code="list_availability_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List all the AvailabilityConfiguration's for the given WorkMail organization.</td>
</tr>
<tr>
    <td><a href="#create_availability_configuration"><CopyableCode code="create_availability_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OrganizationId"><code>OrganizationId</code></a>, <a href="#parameter-DomainName"><code>DomainName</code></a></td>
    <td></td>
    <td>Creates an AvailabilityConfiguration for the given WorkMail organization and domain.</td>
</tr>
<tr>
    <td><a href="#update_availability_configuration"><CopyableCode code="update_availability_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OrganizationId"><code>OrganizationId</code></a>, <a href="#parameter-DomainName"><code>DomainName</code></a></td>
    <td></td>
    <td>Updates an existing AvailabilityConfiguration for the given WorkMail organization and domain.</td>
</tr>
<tr>
    <td><a href="#delete_availability_configuration"><CopyableCode code="delete_availability_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the AvailabilityConfiguration for the given WorkMail organization and domain.</td>
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
    defaultValue="list_availability_configurations"
    values={[
        { label: 'list_availability_configurations', value: 'list_availability_configurations' }
    ]}
>
<TabItem value="list_availability_configurations">

List all the AvailabilityConfiguration's for the given WorkMail organization.

```sql
SELECT
date_created,
date_modified,
domain_name,
ews_provider,
lambda_provider,
provider_type
FROM aws.workmail.availability_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_availability_configuration"
    values={[
        { label: 'create_availability_configuration', value: 'create_availability_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_availability_configuration">

Creates an AvailabilityConfiguration for the given WorkMail organization and domain.

```sql
INSERT INTO aws.workmail.availability_configurations (
ClientToken,
OrganizationId,
DomainName,
EwsProvider,
LambdaProvider,
region
)
SELECT 
'{{ ClientToken }}',
'{{ OrganizationId }}' /* required */,
'{{ DomainName }}' /* required */,
'{{ EwsProvider }}',
'{{ LambdaProvider }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: availability_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the availability_configurations resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        An idempotent token that ensures that an API request is executed only once.
    - name: OrganizationId
      value: "{{ OrganizationId }}"
      description: |
        The WorkMail organization for which the AvailabilityConfiguration will be created.
    - name: DomainName
      value: "{{ DomainName }}"
      description: |
        The domain to which the provider applies.
    - name: EwsProvider
      description: |
        Exchange Web Services (EWS) availability provider definition. The request must contain exactly one provider definition, either EwsProvider or LambdaProvider.
      value:
        EwsEndpoint: "{{ EwsEndpoint }}"
        EwsUsername: "{{ EwsUsername }}"
        EwsPassword: "{{ EwsPassword }}"
    - name: LambdaProvider
      description: |
        Lambda availability provider definition. The request must contain exactly one provider definition, either EwsProvider or LambdaProvider.
      value:
        LambdaArn: "{{ LambdaArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_availability_configuration"
    values={[
        { label: 'update_availability_configuration', value: 'update_availability_configuration' }
    ]}
>
<TabItem value="update_availability_configuration">

Updates an existing AvailabilityConfiguration for the given WorkMail organization and domain.

```sql
UPDATE aws.workmail.availability_configurations
SET 
OrganizationId = '{{ OrganizationId }}',
DomainName = '{{ DomainName }}',
EwsProvider = '{{ EwsProvider }}',
LambdaProvider = '{{ LambdaProvider }}'
WHERE 
region = '{{ region }}' --required
AND OrganizationId = '{{ OrganizationId }}' --required
AND DomainName = '{{ DomainName }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_availability_configuration"
    values={[
        { label: 'delete_availability_configuration', value: 'delete_availability_configuration' }
    ]}
>
<TabItem value="delete_availability_configuration">

Deletes the AvailabilityConfiguration for the given WorkMail organization and domain.

```sql
DELETE FROM aws.workmail.availability_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

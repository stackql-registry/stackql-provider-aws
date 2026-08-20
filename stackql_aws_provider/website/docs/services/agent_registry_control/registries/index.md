--- 
title: registries
hide_title: false
hide_table_of_contents: false
keywords:
  - registries
  - agent_registry_control
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

Creates, updates, deletes, gets or lists a <code>registries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="registries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.agent_registry_control.registries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_registry"
    values={[
        { label: 'get_registry', value: 'get_registry' },
        { label: 'list_registries', value: 'list_registries' }
    ]}
>
<TabItem value="get_registry">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Registry name with validation pattern (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_\-\.\/&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="approval_configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration for the registry's record approval workflow. Controls whether records submitted for approval require manual review before they become approved and discoverable, or are auto-approved. When no auto-approval rules are configured, submitted records require manual review.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the registry was created</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the Resource</td>
</tr>
<tr>
    <td><CopyableCode code="discovery_configuration" /></td>
    <td><code>object</code></td>
    <td>Discovery configuration for the registry. Controls how consumers are authorized to search the registry and invoke its MCP endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="registry_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the registry (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:agent-registry:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:registry/&#91;a-zA-Z0-9&#93;&#123;12,16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="registry_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the registry (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#123;12,16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current status of the registry (CREATING, READY, UPDATING, CREATE_FAILED, UPDATE_FAILED, DELETING, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for the current status. Typically populated when the status indicates a failure state.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the registry was last updated</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_registries">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Registry name with validation pattern (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_\-\.\/&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the registry was created</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the Resource</td>
</tr>
<tr>
    <td><CopyableCode code="discovery_configuration" /></td>
    <td><code>object</code></td>
    <td>Discovery configuration for the registry. Controls how consumers are authorized to search the registry and invoke its MCP endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="registry_arn" /></td>
    <td><code>string</code></td>
    <td>Registry Amazon Resource Name (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:agent-registry:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:registry/&#91;a-zA-Z0-9&#93;&#123;12,16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="registry_id" /></td>
    <td><code>string</code></td>
    <td>Unique registry identifier (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#123;12,16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current status of the registry (CREATING, READY, UPDATING, CREATE_FAILED, UPDATE_FAILED, DELETING, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for the current status. Typically populated when the status indicates a failure state.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the registry was last updated</td>
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
    <td><a href="#get_registry"><CopyableCode code="get_registry" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-registry_id"><code>registry_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a registry by identifier (ARN or ID)</td>
</tr>
<tr>
    <td><a href="#list_registries"><CopyableCode code="list_registries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the registries in the caller's account and Region, with optional filtering by status and discovery authorizer type</td>
</tr>
<tr>
    <td><a href="#create_registry"><CopyableCode code="create_registry" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a new registry, a catalog that organizes registry records and defines their discovery authorization and record approval behavior. Creation is asynchronous: the registry begins in the CREATING status and becomes usable once it reaches READY.</td>
</tr>
<tr>
    <td><a href="#update_registry"><CopyableCode code="update_registry" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-registry_id"><code>registry_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing registry. This operation uses PATCH semantics: specify only the fields you want to change, and omit the rest to leave them unchanged. Updates are applied asynchronously and the registry transitions to the UPDATING status while they are processed.</td>
</tr>
<tr>
    <td><a href="#delete_registry"><CopyableCode code="delete_registry" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-registry_id"><code>registry_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a registry. Deletion is asynchronous: the registry transitions to the DELETING status and is removed along with its registry records.</td>
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
<tr id="parameter-registry_id">
    <td><CopyableCode code="registry_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the registry to delete (ARN or ID)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_registry"
    values={[
        { label: 'get_registry', value: 'get_registry' },
        { label: 'list_registries', value: 'list_registries' }
    ]}
>
<TabItem value="get_registry">

Gets a registry by identifier (ARN or ID)

```sql
SELECT
name,
approval_configuration,
created_at,
description,
discovery_configuration,
registry_arn,
registry_id,
status,
status_reason,
updated_at
FROM aws.agent_registry_control.registries
WHERE registry_id = '{{ registry_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_registries">

Lists the registries in the caller's account and Region, with optional filtering by status and discovery authorizer type

```sql
SELECT
name,
created_at,
description,
discovery_configuration,
registry_arn,
registry_id,
status,
status_reason,
updated_at
FROM aws.agent_registry_control.registries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_registry"
    values={[
        { label: 'create_registry', value: 'create_registry' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_registry">

Creates a new registry, a catalog that organizes registry records and defines their discovery authorization and record approval behavior. Creation is asynchronous: the registry begins in the CREATING status and becomes usable once it reaches READY.

```sql
INSERT INTO aws.agent_registry_control.registries (
name,
description,
discoveryConfiguration,
clientToken,
tags,
approvalConfiguration,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ discoveryConfiguration }}',
'{{ clientToken }}',
'{{ tags }}',
'{{ approvalConfiguration }}',
'{{ region }}'
RETURNING
registry_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: registries
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the registries resource.
    - name: name
      value: "{{ name }}"
      description: |
        Registry name with validation pattern
    - name: description
      value: "{{ description }}"
      description: |
        Description of the Resource
    - name: discoveryConfiguration
      description: |
        Discovery configuration for the registry. Controls how consumers are authorized to search the registry and invoke its MCP endpoint.
      value:
        authorizerConfiguration:
          customJWTAuthorizer:
            discoveryUrl: "{{ discoveryUrl }}"
            allowedAudience:
              - "{{ allowedAudience }}"
            allowedClients:
              - "{{ allowedClients }}"
            allowedScopes:
              - "{{ allowedScopes }}"
            customClaims:
              - inboundTokenClaimName: "{{ inboundTokenClaimName }}"
                inboundTokenClaimValueType: "{{ inboundTokenClaimValueType }}"
                authorizingClaimMatchValue:
                  claimMatchValue: "{{ claimMatchValue }}"
                  claimMatchOperator: "{{ claimMatchOperator }}"
            privateEndpoint:
              selfManagedLatticeResource:
                resourceConfigurationIdentifier: "{{ resourceConfigurationIdentifier }}"
              managedVpcResource:
                vpcIdentifier: "{{ vpcIdentifier }}"
                subnetIds: "{{ subnetIds }}"
                endpointIpAddressType: "{{ endpointIpAddressType }}"
                securityGroupIds: "{{ securityGroupIds }}"
                tags: "{{ tags }}"
                routingDomain: "{{ routingDomain }}"
            privateEndpointOverrides:
              - domain: "{{ domain }}"
                privateEndpoint:
                  selfManagedLatticeResource: "{{ selfManagedLatticeResource }}"
                  managedVpcResource: "{{ managedVpcResource }}"
        authorizerType: "{{ authorizerType }}"
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        Client specified token used for idempotency checks
    - name: tags
      value: "{{ tags }}"
      description: |
        A map of tag keys to tag values.
    - name: approvalConfiguration
      description: |
        Configuration for the registry's record approval workflow. Controls whether records submitted for approval require manual review before they become approved and discoverable, or are auto-approved. When no auto-approval rules are configured, submitted records require manual review.
      value:
        autoApprovalRules:
          - "{{ autoApprovalRules }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_registry"
    values={[
        { label: 'update_registry', value: 'update_registry' }
    ]}
>
<TabItem value="update_registry">

Updates an existing registry. This operation uses PATCH semantics: specify only the fields you want to change, and omit the rest to leave them unchanged. Updates are applied asynchronously and the registry transitions to the UPDATING status while they are processed.

```sql
UPDATE aws.agent_registry_control.registries
SET 
name = '{{ name }}',
description = '{{ description }}',
discoveryConfiguration = '{{ discoveryConfiguration }}',
approvalConfiguration = '{{ approvalConfiguration }}'
WHERE 
registry_id = '{{ registry_id }}' --required
AND region = '{{ region }}' --required
RETURNING
name,
approval_configuration,
created_at,
description,
discovery_configuration,
registry_arn,
registry_id,
status,
status_reason,
updated_at;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_registry"
    values={[
        { label: 'delete_registry', value: 'delete_registry' }
    ]}
>
<TabItem value="delete_registry">

Deletes a registry. Deletion is asynchronous: the registry transitions to the DELETING status and is removed along with its registry records.

```sql
DELETE FROM aws.agent_registry_control.registries
WHERE registry_id = '{{ registry_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

--- 
title: registry_records
hide_title: false
hide_table_of_contents: false
keywords:
  - registry_records
  - bedrock_agentcore_control
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

Creates, updates, deletes, gets or lists a <code>registry_records</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="registry_records" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore_control.registry_records" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_registry_record"
    values={[
        { label: 'get_registry_record', value: 'get_registry_record' },
        { label: 'list_registry_records', value: 'list_registry_records' }
    ]}
>
<TabItem value="get_registry_record">

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
    <td>The name of the registry record. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_\-\.\/&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the registry record was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the registry record.</td>
</tr>
<tr>
    <td><CopyableCode code="descriptorType" /></td>
    <td><code>string</code></td>
    <td>The descriptor type of the registry record. Possible values are MCP, A2A, CUSTOM, and AGENT_SKILLS. (MCP, A2A, CUSTOM, AGENT_SKILLS)</td>
</tr>
<tr>
    <td><CopyableCode code="descriptors" /></td>
    <td><code>object</code></td>
    <td>Contains descriptor-type-specific configurations for a registry record. Only the descriptor matching the record's descriptorType should be populated.</td>
</tr>
<tr>
    <td><CopyableCode code="recordArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the registry record. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:registry/&#91;a-zA-Z0-9&#93;&#123;12,16&#125;/record/&#91;a-zA-Z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recordId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the registry record. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recordVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the registry record. (pattern: &lt;code&gt;&#91;a-zA-Z0-9.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="registryArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the registry that contains the record. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:registry/&#91;a-zA-Z0-9&#93;&#123;12,16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the registry record. Possible values include CREATING, DRAFT, APPROVED, PENDING_APPROVAL, REJECTED, DEPRECATED, UPDATING, CREATE_FAILED, and UPDATE_FAILED. A record transitions from CREATING to DRAFT, then to PENDING_APPROVAL (via SubmitRegistryRecordForApproval), and finally to APPROVED upon approval. (DRAFT, PENDING_APPROVAL, APPROVED, REJECTED, DEPRECATED, CREATING, UPDATING, CREATE_FAILED, UPDATE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusReason" /></td>
    <td><code>string</code></td>
    <td>The reason for the current status, typically set when the status is a failure state.</td>
</tr>
<tr>
    <td><CopyableCode code="synchronizationConfiguration" /></td>
    <td><code>object</code></td>
    <td>Configuration for synchronizing registry record metadata from an external source.</td>
</tr>
<tr>
    <td><CopyableCode code="synchronizationType" /></td>
    <td><code>string</code></td>
    <td>The type of synchronization used for this record. (URL)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the registry record was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_registry_records">

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
    <td>The name of the registry record. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_\-\.\/&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the registry record was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the registry record.</td>
</tr>
<tr>
    <td><CopyableCode code="descriptorType" /></td>
    <td><code>string</code></td>
    <td>The descriptor type of the registry record. Possible values are MCP, A2A, CUSTOM, and AGENT_SKILLS. (MCP, A2A, CUSTOM, AGENT_SKILLS)</td>
</tr>
<tr>
    <td><CopyableCode code="recordArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the registry record. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:registry/&#91;a-zA-Z0-9&#93;&#123;12,16&#125;/record/&#91;a-zA-Z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recordId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the registry record. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recordVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the registry record. (pattern: &lt;code&gt;&#91;a-zA-Z0-9.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="registryArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the registry that contains the record. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:registry/&#91;a-zA-Z0-9&#93;&#123;12,16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the registry record. Possible values include CREATING, DRAFT, APPROVED, PENDING_APPROVAL, REJECTED, DEPRECATED, UPDATING, CREATE_FAILED, and UPDATE_FAILED. (DRAFT, PENDING_APPROVAL, APPROVED, REJECTED, DEPRECATED, CREATING, UPDATING, CREATE_FAILED, UPDATE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the registry record was last updated.</td>
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
    <td><a href="#get_registry_record"><CopyableCode code="get_registry_record" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-registry_id"><code>registry_id</code></a>, <a href="#parameter-record_id"><code>record_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a specific registry record.</td>
</tr>
<tr>
    <td><a href="#list_registry_records"><CopyableCode code="list_registry_records" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-registry_id"><code>registry_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-descriptorType"><code>descriptorType</code></a></td>
    <td>Lists registry records within a registry. You can optionally filter results using the name, status, and descriptorType parameters. When multiple filters are specified, they are combined using AND logic.</td>
</tr>
<tr>
    <td><a href="#create_registry_record"><CopyableCode code="create_registry_record" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-registry_id"><code>registry_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-descriptorType"><code>descriptorType</code></a></td>
    <td></td>
    <td>Creates a new registry record within the specified registry. A registry record represents an individual AI resource's metadata in the registry. This could be an MCP server (and associated tools), A2A agent, agent skill, or a custom resource with a custom schema. The record is processed asynchronously and returns HTTP 202 Accepted.</td>
</tr>
<tr>
    <td><a href="#update_registry_record_status"><CopyableCode code="update_registry_record_status" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-registry_id"><code>registry_id</code></a>, <a href="#parameter-record_id"><code>record_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-statusReason"><code>statusReason</code></a></td>
    <td></td>
    <td>Updates the status of a registry record. Use this operation to approve, reject, or deprecate a registry record.</td>
</tr>
<tr>
    <td><a href="#update_registry_record"><CopyableCode code="update_registry_record" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-registry_id"><code>registry_id</code></a>, <a href="#parameter-record_id"><code>record_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing registry record. This operation uses PATCH semantics, so you only need to specify the fields you want to change. The update is processed asynchronously and returns HTTP 202 Accepted.</td>
</tr>
<tr>
    <td><a href="#delete_registry_record"><CopyableCode code="delete_registry_record" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-registry_id"><code>registry_id</code></a>, <a href="#parameter-record_id"><code>record_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a registry record. The record's status transitions to DELETING and the record is removed asynchronously.</td>
</tr>
<tr>
    <td><a href="#submit_registry_record_for_approval"><CopyableCode code="submit_registry_record_for_approval" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-registry_id"><code>registry_id</code></a>, <a href="#parameter-record_id"><code>record_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Submits a registry record for approval. This transitions the record from DRAFT status to PENDING_APPROVAL status. If the registry has auto-approval enabled, the record is automatically approved.</td>
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
<tr id="parameter-record_id">
    <td><CopyableCode code="record_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the registry record to submit for approval. You can specify either the Amazon Resource Name (ARN) or the ID of the record.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-registry_id">
    <td><CopyableCode code="registry_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the registry containing the record. You can specify either the Amazon Resource Name (ARN) or the ID of the registry.</td>
</tr>
<tr id="parameter-descriptorType">
    <td><CopyableCode code="descriptorType" /></td>
    <td><code>string</code></td>
    <td>Filter registry records by their descriptor type. Possible values are MCP, A2A, CUSTOM, and AGENT_SKILLS.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Filter registry records by name.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Filter registry records by their current status. Possible values include CREATING, DRAFT, APPROVED, PENDING_APPROVAL, REJECTED, DEPRECATED, UPDATING, CREATE_FAILED, and UPDATE_FAILED.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_registry_record"
    values={[
        { label: 'get_registry_record', value: 'get_registry_record' },
        { label: 'list_registry_records', value: 'list_registry_records' }
    ]}
>
<TabItem value="get_registry_record">

Retrieves information about a specific registry record.

```sql
SELECT
name,
createdAt,
description,
descriptorType,
descriptors,
recordArn,
recordId,
recordVersion,
registryArn,
status,
statusReason,
synchronizationConfiguration,
synchronizationType,
updatedAt
FROM aws.bedrock_agentcore_control.registry_records
WHERE registry_id = '{{ registry_id }}' -- required
AND record_id = '{{ record_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_registry_records">

Lists registry records within a registry. You can optionally filter results using the name, status, and descriptorType parameters. When multiple filters are specified, they are combined using AND logic.

```sql
SELECT
name,
createdAt,
description,
descriptorType,
recordArn,
recordId,
recordVersion,
registryArn,
status,
updatedAt
FROM aws.bedrock_agentcore_control.registry_records
WHERE registry_id = '{{ registry_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND name = '{{ name }}'
AND status = '{{ status }}'
AND descriptorType = '{{ descriptorType }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_registry_record"
    values={[
        { label: 'create_registry_record', value: 'create_registry_record' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_registry_record">

Creates a new registry record within the specified registry. A registry record represents an individual AI resource's metadata in the registry. This could be an MCP server (and associated tools), A2A agent, agent skill, or a custom resource with a custom schema. The record is processed asynchronously and returns HTTP 202 Accepted.

```sql
INSERT INTO aws.bedrock_agentcore_control.registry_records (
name,
description,
descriptorType,
descriptors,
recordVersion,
synchronizationType,
synchronizationConfiguration,
clientToken,
registry_id,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ descriptorType }}' /* required */,
'{{ descriptors }}',
'{{ recordVersion }}',
'{{ synchronizationType }}',
'{{ synchronizationConfiguration }}',
'{{ clientToken }}',
'{{ registry_id }}',
'{{ region }}'
RETURNING
recordArn,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: registry_records
  props:
    - name: registry_id
      value: "{{ registry_id }}"
      description: Required parameter for the registry_records resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the registry_records resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: descriptorType
      value: "{{ descriptorType }}"
      valid_values: ['MCP', 'A2A', 'CUSTOM', 'AGENT_SKILLS']
    - name: descriptors
      description: |
        Contains descriptor-type-specific configurations for a registry record. Only the descriptor matching the record's descriptorType should be populated.
      value:
        mcp:
          server:
            schemaVersion: "{{ schemaVersion }}"
            inlineContent: "{{ inlineContent }}"
          tools:
            protocolVersion: "{{ protocolVersion }}"
            inlineContent: "{{ inlineContent }}"
        a2a:
          agentCard:
            schemaVersion: "{{ schemaVersion }}"
            inlineContent: "{{ inlineContent }}"
        custom:
          inlineContent: "{{ inlineContent }}"
        agentSkills:
          skillMd:
            inlineContent: "{{ inlineContent }}"
          skillDefinition:
            schemaVersion: "{{ schemaVersion }}"
            inlineContent: "{{ inlineContent }}"
    - name: recordVersion
      value: "{{ recordVersion }}"
    - name: synchronizationType
      value: "{{ synchronizationType }}"
      valid_values: ['URL']
    - name: synchronizationConfiguration
      description: |
        Configuration for synchronizing registry record metadata from an external source.
      value:
        fromUrl:
          url: "{{ url }}"
          credentialProviderConfigurations:
            - credentialProviderType: "{{ credentialProviderType }}"
              credentialProvider:
                oauthCredentialProvider:
                  providerArn: "{{ providerArn }}"
                  grantType: "{{ grantType }}"
                  scopes: "{{ scopes }}"
                  customParameters: "{{ customParameters }}"
                iamCredentialProvider:
                  roleArn: "{{ roleArn }}"
                  service: "{{ service }}"
                  region: "{{ region }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_registry_record_status"
    values={[
        { label: 'update_registry_record_status', value: 'update_registry_record_status' },
        { label: 'update_registry_record', value: 'update_registry_record' }
    ]}
>
<TabItem value="update_registry_record_status">

Updates the status of a registry record. Use this operation to approve, reject, or deprecate a registry record.

```sql
UPDATE aws.bedrock_agentcore_control.registry_records
SET 
status = '{{ status }}',
statusReason = '{{ statusReason }}'
WHERE 
registry_id = '{{ registry_id }}' --required
AND record_id = '{{ record_id }}' --required
AND region = '{{ region }}' --required
AND status = '{{ status }}' --required
AND statusReason = '{{ statusReason }}' --required
RETURNING
recordArn,
recordId,
registryArn,
status,
statusReason,
updatedAt;
```
</TabItem>
<TabItem value="update_registry_record">

Updates an existing registry record. This operation uses PATCH semantics, so you only need to specify the fields you want to change. The update is processed asynchronously and returns HTTP 202 Accepted.

```sql
UPDATE aws.bedrock_agentcore_control.registry_records
SET 
name = '{{ name }}',
description = '{{ description }}',
descriptorType = '{{ descriptorType }}',
descriptors = '{{ descriptors }}',
recordVersion = '{{ recordVersion }}',
synchronizationType = '{{ synchronizationType }}',
synchronizationConfiguration = '{{ synchronizationConfiguration }}',
triggerSynchronization = {{ triggerSynchronization }}
WHERE 
registry_id = '{{ registry_id }}' --required
AND record_id = '{{ record_id }}' --required
AND region = '{{ region }}' --required
RETURNING
name,
createdAt,
description,
descriptorType,
descriptors,
recordArn,
recordId,
recordVersion,
registryArn,
status,
statusReason,
synchronizationConfiguration,
synchronizationType,
updatedAt;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_registry_record"
    values={[
        { label: 'delete_registry_record', value: 'delete_registry_record' }
    ]}
>
<TabItem value="delete_registry_record">

Deletes a registry record. The record's status transitions to DELETING and the record is removed asynchronously.

```sql
DELETE FROM aws.bedrock_agentcore_control.registry_records
WHERE registry_id = '{{ registry_id }}' --required
AND record_id = '{{ record_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="submit_registry_record_for_approval"
    values={[
        { label: 'submit_registry_record_for_approval', value: 'submit_registry_record_for_approval' }
    ]}
>
<TabItem value="submit_registry_record_for_approval">

Submits a registry record for approval. This transitions the record from DRAFT status to PENDING_APPROVAL status. If the registry has auto-approval enabled, the record is automatically approved.

```sql
EXEC aws.bedrock_agentcore_control.registry_records.submit_registry_record_for_approval 
@registry_id='{{ registry_id }}' --required, 
@record_id='{{ record_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>

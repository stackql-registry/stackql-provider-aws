--- 
title: registry_records
hide_title: false
hide_table_of_contents: false
keywords:
  - registry_records
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

Creates, updates, deletes, gets or lists a <code>registry_records</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="registry_records" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.agent_registry_control.registry_records" /></td></tr>
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
    <td>Registry Record name (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_\-\.\/&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the registry record was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the Resource</td>
</tr>
<tr>
    <td><CopyableCode code="descriptors" /></td>
    <td><code>object</code></td>
    <td>The typed set of descriptors for a registry record. Exactly one descriptor field is populated based on the record type.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Display name for a registry record</td>
</tr>
<tr>
    <td><CopyableCode code="record_arn" /></td>
    <td><code>string</code></td>
    <td>The &ARN; of the registry record. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:agent-registry:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:registry/&#91;a-zA-Z0-9&#93;&#123;12,16&#125;/record/&#91;a-zA-Z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="record_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the registry record. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="record_type" /></td>
    <td><code>string</code></td>
    <td>Record type enum for registry record classification (MCP, AGENT, CUSTOM, SKILL)</td>
</tr>
<tr>
    <td><CopyableCode code="record_version" /></td>
    <td><code>string</code></td>
    <td>Version of the registry record (pattern: &lt;code&gt;&#91;a-zA-Z0-9.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="registry_arn" /></td>
    <td><code>string</code></td>
    <td>The &ARN; of the parent registry that owns the record. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:agent-registry:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:registry/&#91;a-zA-Z0-9&#93;&#123;12,16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The lifecycle status of the registry record. (DRAFT, PENDING_APPROVAL, APPROVED, REJECTED, DEPRECATED, CREATING, UPDATING, CREATE_FAILED, UPDATE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for the current status. Typically populated when the status indicates a failure state.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
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
    <td>Registry Record name (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_\-\.\/&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the registry record was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the Resource</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Display name for a registry record</td>
</tr>
<tr>
    <td><CopyableCode code="record_arn" /></td>
    <td><code>string</code></td>
    <td>The &ARN; of the registry record. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:agent-registry:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:registry/&#91;a-zA-Z0-9&#93;&#123;12,16&#125;/record/&#91;a-zA-Z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="record_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the registry record. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="record_type" /></td>
    <td><code>string</code></td>
    <td>Record type enum for registry record classification (MCP, AGENT, CUSTOM, SKILL)</td>
</tr>
<tr>
    <td><CopyableCode code="record_version" /></td>
    <td><code>string</code></td>
    <td>Version of the registry record (pattern: &lt;code&gt;&#91;a-zA-Z0-9.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="registry_arn" /></td>
    <td><code>string</code></td>
    <td>The &ARN; of the parent registry that owns the record. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:agent-registry:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:registry/&#91;a-zA-Z0-9&#93;&#123;12,16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The lifecycle status of the registry record. (DRAFT, PENDING_APPROVAL, APPROVED, REJECTED, DEPRECATED, CREATING, UPDATING, CREATE_FAILED, UPDATE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
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
    <td>Retrieves the details of a registry record</td>
</tr>
<tr>
    <td><a href="#list_registry_records"><CopyableCode code="list_registry_records" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-registry_id"><code>registry_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the registry records within a registry, with optional filtering by name, status, and record type</td>
</tr>
<tr>
    <td><a href="#create_registry_record"><CopyableCode code="create_registry_record" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-registry_id"><code>registry_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-recordType"><code>recordType</code></a>, <a href="#parameter-descriptors"><code>descriptors</code></a></td>
    <td></td>
    <td>Creates a registry record within a registry. A registry record describes a discoverable resource, such as an MCP server, an agent, an agent skill, or a custom resource. Creation is asynchronous: the record is returned with the CREATING status while it is processed.</td>
</tr>
<tr>
    <td><a href="#update_registry_record_status"><CopyableCode code="update_registry_record_status" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-registry_id"><code>registry_id</code></a>, <a href="#parameter-record_id"><code>record_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-statusReason"><code>statusReason</code></a></td>
    <td></td>
    <td>Updates the status of a registry record as part of the registry's curation workflow, for example to approve or reject a record that is pending approval, or to deprecate an approved record so that it is no longer discoverable</td>
</tr>
<tr>
    <td><a href="#update_registry_record"><CopyableCode code="update_registry_record" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-registry_id"><code>registry_id</code></a>, <a href="#parameter-record_id"><code>record_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a registry record. The update is asynchronous: the record is returned with the UPDATING status while it is processed. Fields that use update wrappers follow PATCH semantics: omit the field to leave it unchanged.</td>
</tr>
<tr>
    <td><a href="#delete_registry_record"><CopyableCode code="delete_registry_record" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-registry_id"><code>registry_id</code></a>, <a href="#parameter-record_id"><code>record_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a registry record</td>
</tr>
<tr>
    <td><a href="#submit_registry_record_for_approval"><CopyableCode code="submit_registry_record_for_approval" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-registry_id"><code>registry_id</code></a>, <a href="#parameter-record_id"><code>record_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Submits a DRAFT registry record for approval, moving it into the registry's approval workflow. Depending on the registry's approval configuration, the record is either auto-approved or set to PENDING_APPROVAL for a curator to approve or reject.</td>
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
    <td>The identifier of the registry record to submit for approval (ARN or ID)</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-registry_id">
    <td><CopyableCode code="registry_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the registry containing the record (ARN or ID)</td>
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

Retrieves the details of a registry record

```sql
SELECT
name,
created_at,
description,
descriptors,
display_name,
record_arn,
record_id,
record_type,
record_version,
registry_arn,
status,
status_reason,
updated_at
FROM aws.agent_registry_control.registry_records
WHERE registry_id = '{{ registry_id }}' -- required
AND record_id = '{{ record_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_registry_records">

Lists the registry records within a registry, with optional filtering by name, status, and record type

```sql
SELECT
name,
created_at,
description,
display_name,
record_arn,
record_id,
record_type,
record_version,
registry_arn,
status,
updated_at
FROM aws.agent_registry_control.registry_records
WHERE registry_id = '{{ registry_id }}' -- required
AND region = '{{ region }}' -- required
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

Creates a registry record within a registry. A registry record describes a discoverable resource, such as an MCP server, an agent, an agent skill, or a custom resource. Creation is asynchronous: the record is returned with the CREATING status while it is processed.

```sql
INSERT INTO aws.agent_registry_control.registry_records (
name,
displayName,
description,
recordType,
descriptors,
recordVersion,
clientToken,
tags,
registry_id,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ displayName }}',
'{{ description }}',
'{{ recordType }}' /* required */,
'{{ descriptors }}' /* required */,
'{{ recordVersion }}',
'{{ clientToken }}',
'{{ tags }}',
'{{ registry_id }}',
'{{ region }}'
RETURNING
record_arn,
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
      description: |
        Registry Record name
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Display name for a registry record
    - name: description
      value: "{{ description }}"
      description: |
        Description of the Resource
    - name: recordType
      value: "{{ recordType }}"
      description: |
        Record type enum for registry record classification
      valid_values: ['MCP', 'AGENT', 'CUSTOM', 'SKILL']
    - name: descriptors
      description: |
        The typed set of descriptors for a registry record. Exactly one descriptor field is populated based on the record type.
      value:
        mcpServer:
          data: "{{ data }}"
          dataSchemaVersion: "{{ dataSchemaVersion }}"
          additionalData:
            tools:
              data: "{{ data }}"
              dataSchemaVersion: "{{ dataSchemaVersion }}"
          source:
            fromUrl:
              url: "{{ url }}"
              credentialProviderConfigurations:
                - credentialProviderType: "{{ credentialProviderType }}"
                  credentialProvider:
                    oauthCredentialProvider: "{{ oauthCredentialProvider }}"
                    iamCredentialProvider: "{{ iamCredentialProvider }}"
        a2aAgentCard:
          data: "{{ data }}"
          dataSchemaVersion: "{{ dataSchemaVersion }}"
          source:
            fromUrl:
              url: "{{ url }}"
              credentialProviderConfigurations:
                - credentialProviderType: "{{ credentialProviderType }}"
                  credentialProvider:
                    oauthCredentialProvider: "{{ oauthCredentialProvider }}"
                    iamCredentialProvider: "{{ iamCredentialProvider }}"
        agentSkillsDefinition:
          data: "{{ data }}"
          dataSchemaVersion: "{{ dataSchemaVersion }}"
          additionalData:
            skillMd:
              data: "{{ data }}"
              dataSchemaVersion: "{{ dataSchemaVersion }}"
              source:
                fromUrl: "{{ fromUrl }}"
        custom:
          data: "{{ data }}"
    - name: recordVersion
      value: "{{ recordVersion }}"
      description: |
        Version of the registry record
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        Client specified token used for idempotency checks
    - name: tags
      value: "{{ tags }}"
      description: |
        A map of tag keys to tag values.
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

Updates the status of a registry record as part of the registry's curation workflow, for example to approve or reject a record that is pending approval, or to deprecate an approved record so that it is no longer discoverable

```sql
UPDATE aws.agent_registry_control.registry_records
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
record_arn,
record_id,
registry_arn,
status,
status_reason,
updated_at;
```
</TabItem>
<TabItem value="update_registry_record">

Updates a registry record. The update is asynchronous: the record is returned with the UPDATING status while it is processed. Fields that use update wrappers follow PATCH semantics: omit the field to leave it unchanged.

```sql
UPDATE aws.agent_registry_control.registry_records
SET 
name = '{{ name }}',
displayName = '{{ displayName }}',
description = '{{ description }}',
recordType = '{{ recordType }}',
descriptors = '{{ descriptors }}',
recordVersion = '{{ recordVersion }}',
triggerSynchronization = {{ triggerSynchronization }}
WHERE 
registry_id = '{{ registry_id }}' --required
AND record_id = '{{ record_id }}' --required
AND region = '{{ region }}' --required
RETURNING
name,
created_at,
description,
descriptors,
display_name,
record_arn,
record_id,
record_type,
record_version,
registry_arn,
status,
status_reason,
updated_at;
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

Deletes a registry record

```sql
DELETE FROM aws.agent_registry_control.registry_records
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

Submits a DRAFT registry record for approval, moving it into the registry's approval workflow. Depending on the registry's approval configuration, the record is either auto-approved or set to PENDING_APPROVAL for a curator to approve or reject.

```sql
EXEC aws.agent_registry_control.registry_records.submit_registry_record_for_approval 
@registry_id='{{ registry_id }}' --required, 
@record_id='{{ record_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>

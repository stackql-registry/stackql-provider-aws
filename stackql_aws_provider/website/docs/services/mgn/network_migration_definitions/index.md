--- 
title: network_migration_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - network_migration_definitions
  - mgn
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

Creates, updates, deletes, gets or lists a <code>network_migration_definitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="network_migration_definitions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mgn.network_migration_definitions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_network_migration_definition"
    values={[
        { label: 'get_network_migration_definition', value: 'get_network_migration_definition' },
        { label: 'list_network_migration_definitions', value: 'list_network_migration_definitions' }
    ]}
>
<TabItem value="get_network_migration_definition">

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
    <td>The name of the network migration definition. (pattern: &lt;code&gt;&#91;^\s\x00&#93;( *&#91;^\s\x00&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the network migration definition.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the network migration definition was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the network migration definition. (pattern: &lt;code&gt;&#91;^\x00&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="network_migration_definition_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the network migration definition. (pattern: &lt;code&gt;nmd-&#91;0-9a-zA-Z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="scope_tags" /></td>
    <td><code>object</code></td>
    <td>Scope tags for the network migration definition.</td>
</tr>
<tr>
    <td><CopyableCode code="source_configurations" /></td>
    <td><code>array</code></td>
    <td>A list of source configurations for the network migration.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags assigned to the network migration definition.</td>
</tr>
<tr>
    <td><CopyableCode code="target_deployment" /></td>
    <td><code>string</code></td>
    <td>The target deployment configuration for the migrated network. (SINGLE_ACCOUNT, MULTI_ACCOUNT)</td>
</tr>
<tr>
    <td><CopyableCode code="target_network" /></td>
    <td><code>object</code></td>
    <td>Configuration for the target network topology and addressing.</td>
</tr>
<tr>
    <td><CopyableCode code="target_s3_configuration" /></td>
    <td><code>object</code></td>
    <td>S3 configuration for storing target network artifacts.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the network migration definition was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_network_migration_definitions">

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
    <td>The name of the network migration definition. (pattern: &lt;code&gt;&#91;^\s\x00&#93;( *&#91;^\s\x00&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the network migration definition.</td>
</tr>
<tr>
    <td><CopyableCode code="network_migration_definition_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the network migration definition. (pattern: &lt;code&gt;nmd-&#91;0-9a-zA-Z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="scope_tags" /></td>
    <td><code>object</code></td>
    <td>Scope tags for the network migration definition.</td>
</tr>
<tr>
    <td><CopyableCode code="source_environment" /></td>
    <td><code>string</code></td>
    <td>The source environment configuration. (NSX, VSPHERE, FORTIGATE_FIREWALL, PALO_ALTO_FIREWALL, CISCO_ACI, LOGICAL_MODEL, MODELIZE_IT, AWS_DISCOVERY_COLLECTOR)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags assigned to the network migration definition.</td>
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
    <td><a href="#get_network_migration_definition"><CopyableCode code="get_network_migration_definition" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details of a network migration definition including source and target configurations.</td>
</tr>
<tr>
    <td><a href="#list_network_migration_definitions"><CopyableCode code="list_network_migration_definitions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all network migration definitions in the account, with optional filtering.</td>
</tr>
<tr>
    <td><a href="#create_network_migration_definition"><CopyableCode code="create_network_migration_definition" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-targetS3Configuration"><code>targetS3Configuration</code></a>, <a href="#parameter-targetNetwork"><code>targetNetwork</code></a></td>
    <td></td>
    <td>Creates a new network migration definition that specifies the source and target network configuration for a migration.</td>
</tr>
<tr>
    <td><a href="#update_network_migration_definition"><CopyableCode code="update_network_migration_definition" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-networkMigrationDefinitionID"><code>networkMigrationDefinitionID</code></a></td>
    <td></td>
    <td>Updates an existing network migration definition with new source or target configurations.</td>
</tr>
<tr>
    <td><a href="#delete_network_migration_definition"><CopyableCode code="delete_network_migration_definition" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a network migration definition. This operation removes the migration definition and all associated metadata.</td>
</tr>
<tr>
    <td><a href="#start_network_migration_analysis"><CopyableCode code="start_network_migration_analysis" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-networkMigrationExecutionID"><code>networkMigrationExecutionID</code></a>, <a href="#parameter-networkMigrationDefinitionID"><code>networkMigrationDefinitionID</code></a></td>
    <td></td>
    <td>Starts a network migration analysis job to evaluate connectivity and compatibility of the migration mappings.</td>
</tr>
<tr>
    <td><a href="#start_network_migration_code_generation"><CopyableCode code="start_network_migration_code_generation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-networkMigrationExecutionID"><code>networkMigrationExecutionID</code></a>, <a href="#parameter-networkMigrationDefinitionID"><code>networkMigrationDefinitionID</code></a></td>
    <td></td>
    <td>Starts a code generation job to convert network migration mappings into infrastructure-as-code templates.</td>
</tr>
<tr>
    <td><a href="#start_network_migration_deployment"><CopyableCode code="start_network_migration_deployment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-networkMigrationExecutionID"><code>networkMigrationExecutionID</code></a>, <a href="#parameter-networkMigrationDefinitionID"><code>networkMigrationDefinitionID</code></a></td>
    <td></td>
    <td>Starts a deployment job to create the target network infrastructure based on the generated code templates.</td>
</tr>
<tr>
    <td><a href="#start_network_migration_mapping"><CopyableCode code="start_network_migration_mapping" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-networkMigrationExecutionID"><code>networkMigrationExecutionID</code></a>, <a href="#parameter-networkMigrationDefinitionID"><code>networkMigrationDefinitionID</code></a></td>
    <td></td>
    <td>Starts the network migration mapping process for a given network migration execution.</td>
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
    defaultValue="get_network_migration_definition"
    values={[
        { label: 'get_network_migration_definition', value: 'get_network_migration_definition' },
        { label: 'list_network_migration_definitions', value: 'list_network_migration_definitions' }
    ]}
>
<TabItem value="get_network_migration_definition">

Retrieves the details of a network migration definition including source and target configurations.

```sql
SELECT
name,
arn,
created_at,
description,
network_migration_definition_id,
scope_tags,
source_configurations,
tags,
target_deployment,
target_network,
target_s3_configuration,
updated_at
FROM aws.mgn.network_migration_definitions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_network_migration_definitions">

Lists all network migration definitions in the account, with optional filtering.

```sql
SELECT
name,
arn,
network_migration_definition_id,
scope_tags,
source_environment,
tags
FROM aws.mgn.network_migration_definitions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_network_migration_definition"
    values={[
        { label: 'create_network_migration_definition', value: 'create_network_migration_definition' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_network_migration_definition">

Creates a new network migration definition that specifies the source and target network configuration for a migration.

```sql
INSERT INTO aws.mgn.network_migration_definitions (
name,
description,
sourceConfigurations,
targetS3Configuration,
targetNetwork,
targetDeployment,
tags,
scopeTags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ sourceConfigurations }}',
'{{ targetS3Configuration }}' /* required */,
'{{ targetNetwork }}' /* required */,
'{{ targetDeployment }}',
'{{ tags }}',
'{{ scopeTags }}',
'{{ region }}'
RETURNING
name,
arn,
created_at,
description,
network_migration_definition_id,
scope_tags,
source_configurations,
tags,
target_deployment,
target_network,
target_s3_configuration,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: network_migration_definitions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the network_migration_definitions resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: sourceConfigurations
      value:
        - sourceEnvironment: "{{ sourceEnvironment }}"
          sourceS3Configuration:
            s3Bucket: "{{ s3Bucket }}"
            s3BucketOwner: "{{ s3BucketOwner }}"
            s3Key: "{{ s3Key }}"
    - name: targetS3Configuration
      description: |
        S3 configuration for storing target network artifacts.
      value:
        s3Bucket: "{{ s3Bucket }}"
        s3BucketOwner: "{{ s3BucketOwner }}"
    - name: targetNetwork
      description: |
        Configuration for the target network topology and addressing.
      value:
        topology: "{{ topology }}"
        inboundCidr: "{{ inboundCidr }}"
        outboundCidr: "{{ outboundCidr }}"
        inspectionCidr: "{{ inspectionCidr }}"
    - name: targetDeployment
      value: "{{ targetDeployment }}"
      valid_values: ['SINGLE_ACCOUNT', 'MULTI_ACCOUNT']
    - name: tags
      value: "{{ tags }}"
    - name: scopeTags
      value: "{{ scopeTags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_network_migration_definition"
    values={[
        { label: 'update_network_migration_definition', value: 'update_network_migration_definition' }
    ]}
>
<TabItem value="update_network_migration_definition">

Updates an existing network migration definition with new source or target configurations.

```sql
UPDATE aws.mgn.network_migration_definitions
SET 
networkMigrationDefinitionID = '{{ networkMigrationDefinitionID }}',
name = '{{ name }}',
description = '{{ description }}',
sourceConfigurations = '{{ sourceConfigurations }}',
targetS3Configuration = '{{ targetS3Configuration }}',
targetNetwork = '{{ targetNetwork }}',
targetDeployment = '{{ targetDeployment }}',
scopeTags = '{{ scopeTags }}'
WHERE 
region = '{{ region }}' --required
AND networkMigrationDefinitionID = '{{ networkMigrationDefinitionID }}' --required
RETURNING
name,
arn,
created_at,
description,
network_migration_definition_id,
scope_tags,
source_configurations,
tags,
target_deployment,
target_network,
target_s3_configuration,
updated_at;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_network_migration_definition"
    values={[
        { label: 'delete_network_migration_definition', value: 'delete_network_migration_definition' }
    ]}
>
<TabItem value="delete_network_migration_definition">

Deletes a network migration definition. This operation removes the migration definition and all associated metadata.

```sql
DELETE FROM aws.mgn.network_migration_definitions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_network_migration_analysis"
    values={[
        { label: 'start_network_migration_analysis', value: 'start_network_migration_analysis' },
        { label: 'start_network_migration_code_generation', value: 'start_network_migration_code_generation' },
        { label: 'start_network_migration_deployment', value: 'start_network_migration_deployment' },
        { label: 'start_network_migration_mapping', value: 'start_network_migration_mapping' }
    ]}
>
<TabItem value="start_network_migration_analysis">

Starts a network migration analysis job to evaluate connectivity and compatibility of the migration mappings.

```sql
EXEC aws.mgn.network_migration_definitions.start_network_migration_analysis 
@region='{{ region }}' --required 
@@json=
'{
"networkMigrationExecutionID": "{{ networkMigrationExecutionID }}", 
"networkMigrationDefinitionID": "{{ networkMigrationDefinitionID }}"
}'
;
```
</TabItem>
<TabItem value="start_network_migration_code_generation">

Starts a code generation job to convert network migration mappings into infrastructure-as-code templates.

```sql
EXEC aws.mgn.network_migration_definitions.start_network_migration_code_generation 
@region='{{ region }}' --required 
@@json=
'{
"networkMigrationExecutionID": "{{ networkMigrationExecutionID }}", 
"networkMigrationDefinitionID": "{{ networkMigrationDefinitionID }}", 
"codeGenerationOutputFormatTypes": "{{ codeGenerationOutputFormatTypes }}"
}'
;
```
</TabItem>
<TabItem value="start_network_migration_deployment">

Starts a deployment job to create the target network infrastructure based on the generated code templates.

```sql
EXEC aws.mgn.network_migration_definitions.start_network_migration_deployment 
@region='{{ region }}' --required 
@@json=
'{
"networkMigrationExecutionID": "{{ networkMigrationExecutionID }}", 
"networkMigrationDefinitionID": "{{ networkMigrationDefinitionID }}"
}'
;
```
</TabItem>
<TabItem value="start_network_migration_mapping">

Starts the network migration mapping process for a given network migration execution.

```sql
EXEC aws.mgn.network_migration_definitions.start_network_migration_mapping 
@region='{{ region }}' --required 
@@json=
'{
"networkMigrationExecutionID": "{{ networkMigrationExecutionID }}", 
"networkMigrationDefinitionID": "{{ networkMigrationDefinitionID }}", 
"securityGroupMappingStrategy": "{{ securityGroupMappingStrategy }}"
}'
;
```
</TabItem>
</Tabs>

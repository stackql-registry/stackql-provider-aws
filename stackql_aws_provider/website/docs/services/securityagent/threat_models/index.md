--- 
title: threat_models
hide_title: false
hide_table_of_contents: false
keywords:
  - threat_models
  - securityagent
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

Creates, updates, deletes, gets or lists a <code>threat_models</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="threat_models" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityagent.threat_models" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_threat_models"
    values={[
        { label: 'batch_get_threat_models', value: 'batch_get_threat_models' },
        { label: 'list_threat_models', value: 'list_threat_models' }
    ]}
>
<TabItem value="batch_get_threat_models">

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
    <td><CopyableCode code="not_found" /></td>
    <td><code>array</code></td>
    <td>List of threat model IDs.</td>
</tr>
<tr>
    <td><CopyableCode code="threat_models" /></td>
    <td><code>array</code></td>
    <td>The list of threat models that were found.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_threat_models">

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
    <td><CopyableCode code="agent_space_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the agent space that contains the threat model.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the threat model was created, in UTC format.</td>
</tr>
<tr>
    <td><CopyableCode code="threat_model_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the threat model.</td>
</tr>
<tr>
    <td><CopyableCode code="title_" /></td>
    <td><code>string</code></td>
    <td>The title of the threat model.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the threat model was last updated, in UTC format.</td>
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
    <td><a href="#batch_get_threat_models"><CopyableCode code="batch_get_threat_models" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about one or more threat models in an agent space.</td>
</tr>
<tr>
    <td><a href="#list_threat_models"><CopyableCode code="list_threat_models" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a paginated list of threat model summaries for the specified agent space.</td>
</tr>
<tr>
    <td><a href="#create_threat_model"><CopyableCode code="create_threat_model" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-title"><code>title</code></a>, <a href="#parameter-agentSpaceId"><code>agentSpaceId</code></a>, <a href="#parameter-serviceRole"><code>serviceRole</code></a></td>
    <td></td>
    <td>Creates a new threat model configuration in an agent space. A threat model defines the parameters for automated threat analysis.</td>
</tr>
<tr>
    <td><a href="#update_threat_model"><CopyableCode code="update_threat_model" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-threatModelId"><code>threatModelId</code></a>, <a href="#parameter-agentSpaceId"><code>agentSpaceId</code></a></td>
    <td></td>
    <td>Updates an existing threat model configuration.</td>
</tr>
<tr>
    <td><a href="#batch_delete_threat_models"><CopyableCode code="batch_delete_threat_models" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-threatModelIds"><code>threatModelIds</code></a>, <a href="#parameter-agentSpaceId"><code>agentSpaceId</code></a></td>
    <td></td>
    <td>Deletes one or more threat models from an agent space.</td>
</tr>
<tr>
    <td><a href="#start_threat_model_job"><CopyableCode code="start_threat_model_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-agentSpaceId"><code>agentSpaceId</code></a>, <a href="#parameter-threatModelId"><code>threatModelId</code></a></td>
    <td></td>
    <td>Starts a new threat model job for a threat model configuration.</td>
</tr>
<tr>
    <td><a href="#stop_threat_model_job"><CopyableCode code="stop_threat_model_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-agentSpaceId"><code>agentSpaceId</code></a>, <a href="#parameter-threatModelJobId"><code>threatModelJobId</code></a></td>
    <td></td>
    <td>Stops a running threat model job.</td>
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
    defaultValue="batch_get_threat_models"
    values={[
        { label: 'batch_get_threat_models', value: 'batch_get_threat_models' },
        { label: 'list_threat_models', value: 'list_threat_models' }
    ]}
>
<TabItem value="batch_get_threat_models">

Retrieves information about one or more threat models in an agent space.

```sql
SELECT
not_found,
threat_models
FROM aws.securityagent.threat_models
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_threat_models">

Returns a paginated list of threat model summaries for the specified agent space.

```sql
SELECT
agent_space_id,
created_at,
threat_model_id,
title_,
updated_at
FROM aws.securityagent.threat_models
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_threat_model"
    values={[
        { label: 'create_threat_model', value: 'create_threat_model' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_threat_model">

Creates a new threat model configuration in an agent space. A threat model defines the parameters for automated threat analysis.

```sql
INSERT INTO aws.securityagent.threat_models (
title,
agentSpaceId,
description,
assets,
scopeDocs,
serviceRole,
logConfig,
reportDestination,
region
)
SELECT 
'{{ title }}' /* required */,
'{{ agentSpaceId }}' /* required */,
'{{ description }}',
'{{ assets }}',
'{{ scopeDocs }}',
'{{ serviceRole }}' /* required */,
'{{ logConfig }}',
'{{ reportDestination }}',
'{{ region }}'
RETURNING
agent_space_id,
assets,
created_at,
description,
log_config,
scope_docs,
service_role,
threat_model_id,
title_,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: threat_models
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the threat_models resource.
    - name: title
      value: "{{ title }}"
    - name: agentSpaceId
      value: "{{ agentSpaceId }}"
    - name: description
      value: "{{ description }}"
    - name: assets
      description: |
        The collection of assets used in a pentest configuration, including endpoints, actors, documents, source code repositories, and integrated repositories.
      value:
        endpoints:
          - uri: "{{ uri }}"
        actors:
          - identifier: "{{ identifier }}"
            uris: "{{ uris }}"
            authentication:
              providerType: "{{ providerType }}"
              value: "{{ value }}"
            description: "{{ description }}"
            enableEmailMfa: {{ enableEmailMfa }}
            mfaForwardingAddress: "{{ mfaForwardingAddress }}"
        documents:
          - s3Location: "{{ s3Location }}"
            artifactId: "{{ artifactId }}"
            integratedDocument:
              integrationId: "{{ integrationId }}"
              resourceId: "{{ resourceId }}"
        sourceCode:
          - s3Location: "{{ s3Location }}"
        integratedRepositories:
          - integrationId: "{{ integrationId }}"
            providerResourceId: "{{ providerResourceId }}"
            branch: "{{ branch }}"
    - name: scopeDocs
      value:
        - s3Location: "{{ s3Location }}"
          artifactId: "{{ artifactId }}"
          integratedDocument:
            integrationId: "{{ integrationId }}"
            resourceId: "{{ resourceId }}"
    - name: serviceRole
      value: "{{ serviceRole }}"
      description: |
        ARN of an IAM role that the service can assume to access customer resources.
    - name: logConfig
      description: |
        The Amazon CloudWatch Logs configuration for pentest job logging.
      value:
        logGroup: "{{ logGroup }}"
        logStream: "{{ logStream }}"
    - name: reportDestination
      description: |
        Destination for publishing scan reports to an integrated document provider.
      value:
        integrationId: "{{ integrationId }}"
        containerId: "{{ containerId }}"
        parentId: "{{ parentId }}"
        documentId: "{{ documentId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_threat_model"
    values={[
        { label: 'update_threat_model', value: 'update_threat_model' }
    ]}
>
<TabItem value="update_threat_model">

Updates an existing threat model configuration.

```sql
UPDATE aws.securityagent.threat_models
SET 
threatModelId = '{{ threatModelId }}',
agentSpaceId = '{{ agentSpaceId }}',
title = '{{ title }}',
description = '{{ description }}',
assets = '{{ assets }}',
scopeDocs = '{{ scopeDocs }}',
serviceRole = '{{ serviceRole }}',
logConfig = '{{ logConfig }}'
WHERE 
region = '{{ region }}' --required
AND threatModelId = '{{ threatModelId }}' --required
AND agentSpaceId = '{{ agentSpaceId }}' --required
RETURNING
agent_space_id,
assets,
created_at,
description,
log_config,
scope_docs,
service_role,
threat_model_id,
title_,
updated_at;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_delete_threat_models"
    values={[
        { label: 'batch_delete_threat_models', value: 'batch_delete_threat_models' },
        { label: 'start_threat_model_job', value: 'start_threat_model_job' },
        { label: 'stop_threat_model_job', value: 'stop_threat_model_job' }
    ]}
>
<TabItem value="batch_delete_threat_models">

Deletes one or more threat models from an agent space.

```sql
EXEC aws.securityagent.threat_models.batch_delete_threat_models 
@region='{{ region }}' --required 
@@json=
'{
"threatModelIds": "{{ threatModelIds }}", 
"agentSpaceId": "{{ agentSpaceId }}"
}'
;
```
</TabItem>
<TabItem value="start_threat_model_job">

Starts a new threat model job for a threat model configuration.

```sql
EXEC aws.securityagent.threat_models.start_threat_model_job 
@region='{{ region }}' --required 
@@json=
'{
"agentSpaceId": "{{ agentSpaceId }}", 
"threatModelId": "{{ threatModelId }}"
}'
;
```
</TabItem>
<TabItem value="stop_threat_model_job">

Stops a running threat model job.

```sql
EXEC aws.securityagent.threat_models.stop_threat_model_job 
@region='{{ region }}' --required 
@@json=
'{
"agentSpaceId": "{{ agentSpaceId }}", 
"threatModelJobId": "{{ threatModelJobId }}"
}'
;
```
</TabItem>
</Tabs>

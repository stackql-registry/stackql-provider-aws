--- 
title: integration_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - integration_associations
  - connect
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

Creates, updates, deletes, gets or lists an <code>integration_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="integration_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.integration_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_integration_associations"
    values={[
        { label: 'list_integration_associations', value: 'list_integration_associations' }
    ]}
>
<TabItem value="list_integration_associations">

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
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="IntegrationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the AppIntegration.</td>
</tr>
<tr>
    <td><CopyableCode code="IntegrationAssociationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the AppIntegration association.</td>
</tr>
<tr>
    <td><CopyableCode code="IntegrationAssociationId" /></td>
    <td><code>string</code></td>
    <td>The identifier for the AppIntegration association.</td>
</tr>
<tr>
    <td><CopyableCode code="IntegrationType" /></td>
    <td><code>string</code></td>
    <td>The integration type. (EVENT, VOICE_ID, PINPOINT_APP, WISDOM_ASSISTANT, WISDOM_KNOWLEDGE_BASE, WISDOM_QUICK_RESPONSES, Q_MESSAGE_TEMPLATES, CASES_DOMAIN, APPLICATION, FILE_SCANNER, SES_IDENTITY, ANALYTICS_CONNECTOR, CALL_TRANSFER_CONNECTOR, COGNITO_USER_POOL, MESSAGE_PROCESSOR)</td>
</tr>
<tr>
    <td><CopyableCode code="SourceApplicationName" /></td>
    <td><code>string</code></td>
    <td>The user-provided, friendly name for the external application. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_ -&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SourceApplicationUrl" /></td>
    <td><code>string</code></td>
    <td>The URL for the external application.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceType" /></td>
    <td><code>string</code></td>
    <td>The name of the source. (SALESFORCE, ZENDESK, CASES)</td>
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
    <td><a href="#list_integration_associations"><CopyableCode code="list_integration_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-integrationType"><code>integrationType</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-integrationArn"><code>integrationArn</code></a></td>
    <td>Provides summary information about the Amazon Web Services resource associations for the specified Amazon Connect instance.</td>
</tr>
<tr>
    <td><a href="#create_integration_association"><CopyableCode code="create_integration_association" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IntegrationType"><code>IntegrationType</code></a>, <a href="#parameter-IntegrationArn"><code>IntegrationArn</code></a></td>
    <td></td>
    <td>Creates an Amazon Web Services resource association with an Amazon Connect instance.</td>
</tr>
<tr>
    <td><a href="#delete_integration_association"><CopyableCode code="delete_integration_association" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-integration_association_id"><code>integration_association_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon Web Services resource association from an Amazon Connect instance. The association must not have any use cases associated with it.</td>
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
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-integration_association_id">
    <td><CopyableCode code="integration_association_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the integration association.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-integrationArn">
    <td><CopyableCode code="integrationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the integration.</td>
</tr>
<tr id="parameter-integrationType">
    <td><CopyableCode code="integrationType" /></td>
    <td><code>string</code></td>
    <td>The integration type.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_integration_associations"
    values={[
        { label: 'list_integration_associations', value: 'list_integration_associations' }
    ]}
>
<TabItem value="list_integration_associations">

Provides summary information about the Amazon Web Services resource associations for the specified Amazon Connect instance.

```sql
SELECT
InstanceId,
IntegrationArn,
IntegrationAssociationArn,
IntegrationAssociationId,
IntegrationType,
SourceApplicationName,
SourceApplicationUrl,
SourceType
FROM aws.connect.integration_associations
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
AND integrationType = '{{ integrationType }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND integrationArn = '{{ integrationArn }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_integration_association"
    values={[
        { label: 'create_integration_association', value: 'create_integration_association' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_integration_association">

Creates an Amazon Web Services resource association with an Amazon Connect instance.

```sql
INSERT INTO aws.connect.integration_associations (
IntegrationType,
IntegrationArn,
SourceApplicationUrl,
SourceApplicationName,
SourceType,
Tags,
instance_id,
region
)
SELECT 
'{{ IntegrationType }}' /* required */,
'{{ IntegrationArn }}' /* required */,
'{{ SourceApplicationUrl }}',
'{{ SourceApplicationName }}',
'{{ SourceType }}',
'{{ Tags }}',
'{{ instance_id }}',
'{{ region }}'
RETURNING
IntegrationAssociationArn,
IntegrationAssociationId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: integration_associations
  props:
    - name: instance_id
      value: "{{ instance_id }}"
      description: Required parameter for the integration_associations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the integration_associations resource.
    - name: IntegrationType
      value: "{{ IntegrationType }}"
      valid_values: ['EVENT', 'VOICE_ID', 'PINPOINT_APP', 'WISDOM_ASSISTANT', 'WISDOM_KNOWLEDGE_BASE', 'WISDOM_QUICK_RESPONSES', 'Q_MESSAGE_TEMPLATES', 'CASES_DOMAIN', 'APPLICATION', 'FILE_SCANNER', 'SES_IDENTITY', 'ANALYTICS_CONNECTOR', 'CALL_TRANSFER_CONNECTOR', 'COGNITO_USER_POOL', 'MESSAGE_PROCESSOR']
    - name: IntegrationArn
      value: "{{ IntegrationArn }}"
    - name: SourceApplicationUrl
      value: "{{ SourceApplicationUrl }}"
    - name: SourceApplicationName
      value: "{{ SourceApplicationName }}"
    - name: SourceType
      value: "{{ SourceType }}"
      valid_values: ['SALESFORCE', 'ZENDESK', 'CASES']
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_integration_association"
    values={[
        { label: 'delete_integration_association', value: 'delete_integration_association' }
    ]}
>
<TabItem value="delete_integration_association">

Deletes an Amazon Web Services resource association from an Amazon Connect instance. The association must not have any use cases associated with it.

```sql
DELETE FROM aws.connect.integration_associations
WHERE instance_id = '{{ instance_id }}' --required
AND integration_association_id = '{{ integration_association_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

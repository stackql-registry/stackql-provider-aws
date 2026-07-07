--- 
title: gateway_targets
hide_title: false
hide_table_of_contents: false
keywords:
  - gateway_targets
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

Creates, updates, deletes, gets or lists a <code>gateway_targets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="gateway_targets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore_control.gateway_targets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_gateway_target"
    values={[
        { label: 'get_gateway_target', value: 'get_gateway_target' },
        { label: 'list_gateway_targets', value: 'list_gateway_targets' }
    ]}
>
<TabItem value="get_gateway_target">

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
    <td>The name of the gateway target. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91;-&#93;?)&#123;1,100&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="authorizationData" /></td>
    <td><code>object</code></td>
    <td>OAuth2 authorization data for the gateway target. This data is returned when a target is configured with a credential provider with authorization code grant type and requires user federation.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the gateway target was created.</td>
</tr>
<tr>
    <td><CopyableCode code="credentialProviderConfigurations" /></td>
    <td><code>array</code></td>
    <td>The credential provider configurations for the gateway target.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the gateway target.</td>
</tr>
<tr>
    <td><CopyableCode code="gatewayArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the gateway. (pattern: &lt;code&gt;arn:aws(|-cn|-us-gov):bedrock-agentcore:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:gateway/(&#91;0-9a-z&#93;&#91;-&#93;?)&#123;1,48&#125;-&#91;a-z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastSynchronizedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last synchronization of the target.</td>
</tr>
<tr>
    <td><CopyableCode code="metadataConfiguration" /></td>
    <td><code>object</code></td>
    <td>Configuration for HTTP header and query parameter propagation between the gateway and target servers.</td>
</tr>
<tr>
    <td><CopyableCode code="privateEndpoint" /></td>
    <td><code>object</code></td>
    <td>The private endpoint configuration for a gateway target. Defines how the gateway connects to private resources in your VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="privateEndpointManagedResources" /></td>
    <td><code>array</code></td>
    <td>The managed resources created by the gateway for private endpoint connectivity.</td>
</tr>
<tr>
    <td><CopyableCode code="protocolType" /></td>
    <td><code>string</code></td>
    <td>The protocol type of the gateway target. (MCP, HTTP)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the gateway target. (CREATING, UPDATING, UPDATE_UNSUCCESSFUL, DELETING, READY, FAILED, SYNCHRONIZING, SYNCHRONIZE_UNSUCCESSFUL, CREATE_PENDING_AUTH, UPDATE_PENDING_AUTH, SYNCHRONIZE_PENDING_AUTH)</td>
</tr>
<tr>
    <td><CopyableCode code="statusReasons" /></td>
    <td><code>array</code></td>
    <td>The reasons for the current status of the gateway target.</td>
</tr>
<tr>
    <td><CopyableCode code="targetConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration for a gateway target. This structure defines how the gateway connects to and interacts with the target endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="targetId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the gateway target. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the gateway target was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_gateway_targets">

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
    <td>The name of the target. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91;-&#93;?)&#123;1,100&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the target was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the target.</td>
</tr>
<tr>
    <td><CopyableCode code="resourcePriority" /></td>
    <td><code>integer</code></td>
    <td>Priority for resolving resource URI conflicts across targets. Lower values take precedence. Defaults to 1000 when not set.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the target. (CREATING, UPDATING, UPDATE_UNSUCCESSFUL, DELETING, READY, FAILED, SYNCHRONIZING, SYNCHRONIZE_UNSUCCESSFUL, CREATE_PENDING_AUTH, UPDATE_PENDING_AUTH, SYNCHRONIZE_PENDING_AUTH)</td>
</tr>
<tr>
    <td><CopyableCode code="targetId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the target. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the target was last updated.</td>
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
    <td><a href="#get_gateway_target"><CopyableCode code="get_gateway_target" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-gateway_identifier"><code>gateway_identifier</code></a>, <a href="#parameter-target_id"><code>target_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a specific gateway target.</td>
</tr>
<tr>
    <td><a href="#list_gateway_targets"><CopyableCode code="list_gateway_targets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-gateway_identifier"><code>gateway_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all targets for a specific gateway.</td>
</tr>
<tr>
    <td><a href="#create_gateway_target"><CopyableCode code="create_gateway_target" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-gateway_identifier"><code>gateway_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-targetConfiguration"><code>targetConfiguration</code></a></td>
    <td></td>
    <td>Creates a target for a gateway. A target defines an endpoint that the gateway can connect to.</td>
</tr>
<tr>
    <td><a href="#update_gateway_target"><CopyableCode code="update_gateway_target" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-gateway_identifier"><code>gateway_identifier</code></a>, <a href="#parameter-target_id"><code>target_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-targetConfiguration"><code>targetConfiguration</code></a></td>
    <td></td>
    <td>Updates an existing gateway target. You cannot update a target that is in a pending authorization state (CREATE_PENDING_AUTH, UPDATE_PENDING_AUTH, or SYNCHRONIZE_PENDING_AUTH). Wait for the authorization to complete or fail before updating the target.</td>
</tr>
<tr>
    <td><a href="#delete_gateway_target"><CopyableCode code="delete_gateway_target" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-gateway_identifier"><code>gateway_identifier</code></a>, <a href="#parameter-target_id"><code>target_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a gateway target. You cannot delete a target that is in a pending authorization state (CREATE_PENDING_AUTH, UPDATE_PENDING_AUTH, or SYNCHRONIZE_PENDING_AUTH). Wait for the authorization to complete or fail before deleting the target.</td>
</tr>
<tr>
    <td><a href="#synchronize_gateway_targets"><CopyableCode code="synchronize_gateway_targets" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-gateway_identifier"><code>gateway_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-targetIdList"><code>targetIdList</code></a></td>
    <td></td>
    <td>Synchronizes the gateway targets by fetching the latest tool definitions from the target endpoints. You cannot synchronize a target that is in a pending authorization state (CREATE_PENDING_AUTH, UPDATE_PENDING_AUTH, or SYNCHRONIZE_PENDING_AUTH). Wait for the authorization to complete or fail before synchronizing. You cannot synchronize a target that has a static tool schema (mcpToolSchema) configured. Remove the static schema through an UpdateGatewayTarget call to enable dynamic tool synchronization.</td>
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
<tr id="parameter-gateway_identifier">
    <td><CopyableCode code="gateway_identifier" /></td>
    <td><code>string</code></td>
    <td>The gateway Identifier.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-target_id">
    <td><CopyableCode code="target_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the gateway target to delete.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_gateway_target"
    values={[
        { label: 'get_gateway_target', value: 'get_gateway_target' },
        { label: 'list_gateway_targets', value: 'list_gateway_targets' }
    ]}
>
<TabItem value="get_gateway_target">

Retrieves information about a specific gateway target.

```sql
SELECT
name,
authorizationData,
createdAt,
credentialProviderConfigurations,
description,
gatewayArn,
lastSynchronizedAt,
metadataConfiguration,
privateEndpoint,
privateEndpointManagedResources,
protocolType,
status,
statusReasons,
targetConfiguration,
targetId,
updatedAt
FROM aws.bedrock_agentcore_control.gateway_targets
WHERE gateway_identifier = '{{ gateway_identifier }}' -- required
AND target_id = '{{ target_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_gateway_targets">

Lists all targets for a specific gateway.

```sql
SELECT
name,
createdAt,
description,
resourcePriority,
status,
targetId,
updatedAt
FROM aws.bedrock_agentcore_control.gateway_targets
WHERE gateway_identifier = '{{ gateway_identifier }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_gateway_target"
    values={[
        { label: 'create_gateway_target', value: 'create_gateway_target' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_gateway_target">

Creates a target for a gateway. A target defines an endpoint that the gateway can connect to.

```sql
INSERT INTO aws.bedrock_agentcore_control.gateway_targets (
name,
description,
clientToken,
targetConfiguration,
credentialProviderConfigurations,
metadataConfiguration,
privateEndpoint,
gateway_identifier,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ clientToken }}',
'{{ targetConfiguration }}' /* required */,
'{{ credentialProviderConfigurations }}',
'{{ metadataConfiguration }}',
'{{ privateEndpoint }}',
'{{ gateway_identifier }}',
'{{ region }}'
RETURNING
name,
authorizationData,
createdAt,
credentialProviderConfigurations,
description,
gatewayArn,
lastSynchronizedAt,
metadataConfiguration,
privateEndpoint,
privateEndpointManagedResources,
protocolType,
status,
statusReasons,
targetConfiguration,
targetId,
updatedAt
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: gateway_targets
  props:
    - name: gateway_identifier
      value: "{{ gateway_identifier }}"
      description: Required parameter for the gateway_targets resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the gateway_targets resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: targetConfiguration
      description: |
        The configuration for a gateway target. This structure defines how the gateway connects to and interacts with the target endpoint.
      value:
        mcp:
          openApiSchema:
            s3:
              uri: "{{ uri }}"
              bucketOwnerAccountId: "{{ bucketOwnerAccountId }}"
            inlinePayload: "{{ inlinePayload }}"
          smithyModel:
            s3:
              uri: "{{ uri }}"
              bucketOwnerAccountId: "{{ bucketOwnerAccountId }}"
            inlinePayload: "{{ inlinePayload }}"
          lambda:
            lambdaArn: "{{ lambdaArn }}"
            toolSchema:
              s3:
                uri: "{{ uri }}"
                bucketOwnerAccountId: "{{ bucketOwnerAccountId }}"
              inlinePayload:
                - name: "{{ name }}"
                  description: "{{ description }}"
                  inputSchema:
                    type_: "{{ type_ }}"
                    properties_: "{{ properties_ }}"
                    required_: "{{ required_ }}"
                    items_: "{{ items_ }}"
                    description: "{{ description }}"
                  outputSchema:
                    type_: "{{ type_ }}"
                    properties_: "{{ properties_ }}"
                    required_: "{{ required_ }}"
                    items_: "{{ items_ }}"
                    description: "{{ description }}"
          mcpServer:
            endpoint: "{{ endpoint }}"
            mcpToolSchema:
              s3:
                uri: "{{ uri }}"
                bucketOwnerAccountId: "{{ bucketOwnerAccountId }}"
              inlinePayload: "{{ inlinePayload }}"
            listingMode: "{{ listingMode }}"
            resourcePriority: {{ resourcePriority }}
          apiGateway:
            restApiId: "{{ restApiId }}"
            stage: "{{ stage }}"
            apiGatewayToolConfiguration:
              toolOverrides:
                - name: "{{ name }}"
                  description: "{{ description }}"
                  path: "{{ path }}"
                  method: "{{ method }}"
              toolFilters:
                - filterPath: "{{ filterPath }}"
                  methods: "{{ methods }}"
        http:
          agentcoreRuntime:
            arn: "{{ arn }}"
            qualifier: "{{ qualifier }}"
    - name: credentialProviderConfigurations
      value:
        - credentialProviderType: "{{ credentialProviderType }}"
          credentialProvider:
            oauthCredentialProvider:
              providerArn: "{{ providerArn }}"
              scopes:
                - "{{ scopes }}"
              customParameters: "{{ customParameters }}"
              grantType: "{{ grantType }}"
              defaultReturnUrl: "{{ defaultReturnUrl }}"
            apiKeyCredentialProvider:
              providerArn: "{{ providerArn }}"
              credentialParameterName: "{{ credentialParameterName }}"
              credentialPrefix: "{{ credentialPrefix }}"
              credentialLocation: "{{ credentialLocation }}"
            iamCredentialProvider:
              service: "{{ service }}"
              region: "{{ region }}"
    - name: metadataConfiguration
      description: |
        Configuration for HTTP header and query parameter propagation between the gateway and target servers.
      value:
        allowedRequestHeaders:
          - "{{ allowedRequestHeaders }}"
        allowedQueryParameters:
          - "{{ allowedQueryParameters }}"
        allowedResponseHeaders:
          - "{{ allowedResponseHeaders }}"
    - name: privateEndpoint
      description: |
        The private endpoint configuration for a gateway target. Defines how the gateway connects to private resources in your VPC.
      value:
        selfManagedLatticeResource:
          resourceConfigurationIdentifier: "{{ resourceConfigurationIdentifier }}"
        managedVpcResource:
          vpcIdentifier: "{{ vpcIdentifier }}"
          subnetIds:
            - "{{ subnetIds }}"
          endpointIpAddressType: "{{ endpointIpAddressType }}"
          securityGroupIds:
            - "{{ securityGroupIds }}"
          tags: "{{ tags }}"
          routingDomain: "{{ routingDomain }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_gateway_target"
    values={[
        { label: 'update_gateway_target', value: 'update_gateway_target' }
    ]}
>
<TabItem value="update_gateway_target">

Updates an existing gateway target. You cannot update a target that is in a pending authorization state (CREATE_PENDING_AUTH, UPDATE_PENDING_AUTH, or SYNCHRONIZE_PENDING_AUTH). Wait for the authorization to complete or fail before updating the target.

```sql
UPDATE aws.bedrock_agentcore_control.gateway_targets
SET 
name = '{{ name }}',
description = '{{ description }}',
targetConfiguration = '{{ targetConfiguration }}',
credentialProviderConfigurations = '{{ credentialProviderConfigurations }}',
metadataConfiguration = '{{ metadataConfiguration }}',
privateEndpoint = '{{ privateEndpoint }}'
WHERE 
gateway_identifier = '{{ gateway_identifier }}' --required
AND target_id = '{{ target_id }}' --required
AND region = '{{ region }}' --required
AND name = '{{ name }}' --required
AND targetConfiguration = '{{ targetConfiguration }}' --required
RETURNING
name,
authorizationData,
createdAt,
credentialProviderConfigurations,
description,
gatewayArn,
lastSynchronizedAt,
metadataConfiguration,
privateEndpoint,
privateEndpointManagedResources,
protocolType,
status,
statusReasons,
targetConfiguration,
targetId,
updatedAt;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_gateway_target"
    values={[
        { label: 'delete_gateway_target', value: 'delete_gateway_target' }
    ]}
>
<TabItem value="delete_gateway_target">

Deletes a gateway target. You cannot delete a target that is in a pending authorization state (CREATE_PENDING_AUTH, UPDATE_PENDING_AUTH, or SYNCHRONIZE_PENDING_AUTH). Wait for the authorization to complete or fail before deleting the target.

```sql
DELETE FROM aws.bedrock_agentcore_control.gateway_targets
WHERE gateway_identifier = '{{ gateway_identifier }}' --required
AND target_id = '{{ target_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="synchronize_gateway_targets"
    values={[
        { label: 'synchronize_gateway_targets', value: 'synchronize_gateway_targets' }
    ]}
>
<TabItem value="synchronize_gateway_targets">

Synchronizes the gateway targets by fetching the latest tool definitions from the target endpoints. You cannot synchronize a target that is in a pending authorization state (CREATE_PENDING_AUTH, UPDATE_PENDING_AUTH, or SYNCHRONIZE_PENDING_AUTH). Wait for the authorization to complete or fail before synchronizing. You cannot synchronize a target that has a static tool schema (mcpToolSchema) configured. Remove the static schema through an UpdateGatewayTarget call to enable dynamic tool synchronization.

```sql
EXEC aws.bedrock_agentcore_control.gateway_targets.synchronize_gateway_targets 
@gateway_identifier='{{ gateway_identifier }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"targetIdList": "{{ targetIdList }}"
}'
;
```
</TabItem>
</Tabs>

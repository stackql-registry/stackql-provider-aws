--- 
title: harness
hide_title: false
hide_table_of_contents: false
keywords:
  - harness
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

Creates, updates, deletes, gets or lists a <code>harness</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="harness" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore_control.harness" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_harness"
    values={[
        { label: 'get_harness', value: 'get_harness' }
    ]}
>
<TabItem value="get_harness">

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
    <td><CopyableCode code="allowedTools" /></td>
    <td><code>array</code></td>
    <td>The allowed tools of the Harness. All tools are allowed by default.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Harness. (pattern: &lt;code&gt;arn:(&#91;^:&#93;+)?:bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:harness/&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,39&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="authorizerConfiguration" /></td>
    <td><code>object</code></td>
    <td>Represents inbound authorization configuration options used to authenticate incoming requests.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The createdAt time of the Harness.</td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>object</code></td>
    <td>The compute environment on which the Harness runs.</td>
</tr>
<tr>
    <td><CopyableCode code="environmentArtifact" /></td>
    <td><code>object</code></td>
    <td>The environment artifact for a harness, such as a container image containing custom dependencies.</td>
</tr>
<tr>
    <td><CopyableCode code="environmentVariables" /></td>
    <td><code>object</code></td>
    <td>Environment variables exposed in the environment in which the Harness operates.</td>
</tr>
<tr>
    <td><CopyableCode code="executionRoleArn" /></td>
    <td><code>string</code></td>
    <td>IAM role the Harness assumes when running. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::(&#91;0-9&#93;&#123;12&#125;)?:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="failureReason" /></td>
    <td><code>string</code></td>
    <td>Reason why create or update operations fail.</td>
</tr>
<tr>
    <td><CopyableCode code="harnessId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Harness. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,39&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="harnessName" /></td>
    <td><code>string</code></td>
    <td>The name of the Harness. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,39&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="maxIterations" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of iterations in the agent loop allowed before exiting per invocation.</td>
</tr>
<tr>
    <td><CopyableCode code="maxTokens" /></td>
    <td><code>integer</code></td>
    <td>The maximum total number of output tokens the agent can generate across all model calls within a single invocation.</td>
</tr>
<tr>
    <td><CopyableCode code="memory" /></td>
    <td><code>object</code></td>
    <td>The memory configuration for a harness.</td>
</tr>
<tr>
    <td><CopyableCode code="model" /></td>
    <td><code>object</code></td>
    <td>Specification of which model to use.</td>
</tr>
<tr>
    <td><CopyableCode code="skills" /></td>
    <td><code>array</code></td>
    <td>The skills of the Harness.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the Harness. (CREATING, CREATE_FAILED, UPDATING, UPDATE_FAILED, READY, DELETING, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="systemPrompt" /></td>
    <td><code>array</code></td>
    <td>The system prompt of the Harness.</td>
</tr>
<tr>
    <td><CopyableCode code="timeoutSeconds" /></td>
    <td><code>integer</code></td>
    <td>The maximum duration per invocation.</td>
</tr>
<tr>
    <td><CopyableCode code="tools" /></td>
    <td><code>array</code></td>
    <td>The tools of the Harness.</td>
</tr>
<tr>
    <td><CopyableCode code="truncation" /></td>
    <td><code>object</code></td>
    <td>Configuration for truncating conversation context when it exceeds model limits.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The updatedAt time of the Harness.</td>
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
    <td><a href="#get_harness"><CopyableCode code="get_harness" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-harness_id"><code>harness_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Operation to get a single Harness.</td>
</tr>
<tr>
    <td><a href="#create_harness"><CopyableCode code="create_harness" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-harnessName"><code>harnessName</code></a>, <a href="#parameter-executionRoleArn"><code>executionRoleArn</code></a></td>
    <td></td>
    <td>Operation to create a Harness.</td>
</tr>
<tr>
    <td><a href="#update_harness"><CopyableCode code="update_harness" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-harness_id"><code>harness_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Operation to update a Harness.</td>
</tr>
<tr>
    <td><a href="#delete_harness"><CopyableCode code="delete_harness" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-harness_id"><code>harness_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Operation to delete a Harness.</td>
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
<tr id="parameter-harness_id">
    <td><CopyableCode code="harness_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the harness to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier to ensure idempotency of the request.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_harness"
    values={[
        { label: 'get_harness', value: 'get_harness' }
    ]}
>
<TabItem value="get_harness">

Operation to get a single Harness.

```sql
SELECT
allowedTools,
arn,
authorizerConfiguration,
createdAt,
environment,
environmentArtifact,
environmentVariables,
executionRoleArn,
failureReason,
harnessId,
harnessName,
maxIterations,
maxTokens,
memory,
model,
skills,
status,
systemPrompt,
timeoutSeconds,
tools,
truncation,
updatedAt
FROM aws.bedrock_agentcore_control.harness
WHERE harness_id = '{{ harness_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_harness"
    values={[
        { label: 'create_harness', value: 'create_harness' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_harness">

Operation to create a Harness.

```sql
INSERT INTO aws.bedrock_agentcore_control.harness (
harnessName,
clientToken,
executionRoleArn,
environment,
environmentArtifact,
environmentVariables,
authorizerConfiguration,
model,
systemPrompt,
tools,
skills,
allowedTools,
memory,
truncation,
maxIterations,
maxTokens,
timeoutSeconds,
tags,
region
)
SELECT 
'{{ harnessName }}' /* required */,
'{{ clientToken }}',
'{{ executionRoleArn }}' /* required */,
'{{ environment }}',
'{{ environmentArtifact }}',
'{{ environmentVariables }}',
'{{ authorizerConfiguration }}',
'{{ model }}',
'{{ systemPrompt }}',
'{{ tools }}',
'{{ skills }}',
'{{ allowedTools }}',
'{{ memory }}',
'{{ truncation }}',
{{ maxIterations }},
{{ maxTokens }},
{{ timeoutSeconds }},
'{{ tags }}',
'{{ region }}'
RETURNING
harness
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: harness
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the harness resource.
    - name: harnessName
      value: "{{ harnessName }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: executionRoleArn
      value: "{{ executionRoleArn }}"
    - name: environment
      description: |
        The environment provider request configuration.
      value:
        agentCoreRuntimeEnvironment:
          lifecycleConfiguration:
            idleRuntimeSessionTimeout: {{ idleRuntimeSessionTimeout }}
            maxLifetime: {{ maxLifetime }}
          networkConfiguration:
            networkMode: "{{ networkMode }}"
            networkModeConfig:
              securityGroups:
                - "{{ securityGroups }}"
              subnets:
                - "{{ subnets }}"
              requireServiceS3Endpoint: {{ requireServiceS3Endpoint }}
          filesystemConfigurations:
            - sessionStorage:
                mountPath: "{{ mountPath }}"
              s3FilesAccessPoint:
                accessPointArn: "{{ accessPointArn }}"
                mountPath: "{{ mountPath }}"
              efsAccessPoint:
                accessPointArn: "{{ accessPointArn }}"
                mountPath: "{{ mountPath }}"
    - name: environmentArtifact
      description: |
        The environment artifact for a harness, such as a container image containing custom dependencies.
      value:
        containerConfiguration:
          containerUri: "{{ containerUri }}"
    - name: environmentVariables
      value: "{{ environmentVariables }}"
    - name: authorizerConfiguration
      description: |
        Represents inbound authorization configuration options used to authenticate incoming requests.
      value:
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
                claimMatchValue:
                  matchValueString: "{{ matchValueString }}"
                  matchValueStringList: "{{ matchValueStringList }}"
                claimMatchOperator: "{{ claimMatchOperator }}"
          privateEndpoint:
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
          privateEndpointOverrides:
            - domain: "{{ domain }}"
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
    - name: model
      description: |
        Specification of which model to use.
      value:
        bedrockModelConfig:
          modelId: "{{ modelId }}"
          maxTokens: {{ maxTokens }}
          temperature: {{ temperature }}
          topP: {{ topP }}
        openAiModelConfig:
          modelId: "{{ modelId }}"
          apiKeyArn: "{{ apiKeyArn }}"
          maxTokens: {{ maxTokens }}
          temperature: {{ temperature }}
          topP: {{ topP }}
        geminiModelConfig:
          modelId: "{{ modelId }}"
          apiKeyArn: "{{ apiKeyArn }}"
          maxTokens: {{ maxTokens }}
          temperature: {{ temperature }}
          topP: {{ topP }}
          topK: {{ topK }}
    - name: systemPrompt
      value:
        - text: "{{ text }}"
    - name: tools
      value:
        - type_: "{{ type_ }}"
          name: "{{ name }}"
          config:
            remoteMcp:
              url: "{{ url }}"
              headers: "{{ headers }}"
            agentCoreBrowser:
              browserArn: "{{ browserArn }}"
            agentCoreGateway:
              gatewayArn: "{{ gatewayArn }}"
              outboundAuth:
                awsIam: "{{ awsIam }}"
                none: "{{ none }}"
                oauth:
                  providerArn: "{{ providerArn }}"
                  scopes: "{{ scopes }}"
                  customParameters: "{{ customParameters }}"
                  grantType: "{{ grantType }}"
                  defaultReturnUrl: "{{ defaultReturnUrl }}"
            inlineFunction:
              description: "{{ description }}"
              inputSchema: "{{ inputSchema }}"
            agentCoreCodeInterpreter:
              codeInterpreterArn: "{{ codeInterpreterArn }}"
    - name: skills
      value:
        - path: "{{ path }}"
    - name: allowedTools
      value:
        - "{{ allowedTools }}"
    - name: memory
      description: |
        The memory configuration for a harness.
      value:
        agentCoreMemoryConfiguration:
          arn: "{{ arn }}"
          actorId: "{{ actorId }}"
          messagesCount: {{ messagesCount }}
          retrievalConfig: "{{ retrievalConfig }}"
    - name: truncation
      description: |
        Configuration for truncating conversation context when it exceeds model limits.
      value:
        strategy: "{{ strategy }}"
        config:
          slidingWindow:
            messagesCount: {{ messagesCount }}
          summarization:
            summaryRatio: {{ summaryRatio }}
            preserveRecentMessages: {{ preserveRecentMessages }}
            summarizationSystemPrompt: "{{ summarizationSystemPrompt }}"
    - name: maxIterations
      value: {{ maxIterations }}
    - name: maxTokens
      value: {{ maxTokens }}
    - name: timeoutSeconds
      value: {{ timeoutSeconds }}
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_harness"
    values={[
        { label: 'update_harness', value: 'update_harness' }
    ]}
>
<TabItem value="update_harness">

Operation to update a Harness.

```sql
UPDATE aws.bedrock_agentcore_control.harness
SET 
clientToken = '{{ clientToken }}',
executionRoleArn = '{{ executionRoleArn }}',
environment = '{{ environment }}',
environmentArtifact = '{{ environmentArtifact }}',
environmentVariables = '{{ environmentVariables }}',
authorizerConfiguration = '{{ authorizerConfiguration }}',
model = '{{ model }}',
systemPrompt = '{{ systemPrompt }}',
tools = '{{ tools }}',
skills = '{{ skills }}',
allowedTools = '{{ allowedTools }}',
memory = '{{ memory }}',
truncation = '{{ truncation }}',
maxIterations = {{ maxIterations }},
maxTokens = {{ maxTokens }},
timeoutSeconds = {{ timeoutSeconds }}
WHERE 
harness_id = '{{ harness_id }}' --required
AND region = '{{ region }}' --required
RETURNING
harness;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_harness"
    values={[
        { label: 'delete_harness', value: 'delete_harness' }
    ]}
>
<TabItem value="delete_harness">

Operation to delete a Harness.

```sql
DELETE FROM aws.bedrock_agentcore_control.harness
WHERE harness_id = '{{ harness_id }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>

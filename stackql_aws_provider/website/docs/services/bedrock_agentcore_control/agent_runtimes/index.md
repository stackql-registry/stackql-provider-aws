--- 
title: agent_runtimes
hide_title: false
hide_table_of_contents: false
keywords:
  - agent_runtimes
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

Creates, updates, deletes, gets or lists an <code>agent_runtimes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agent_runtimes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore_control.agent_runtimes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_agent_runtime"
    values={[
        { label: 'get_agent_runtime', value: 'get_agent_runtime' },
        { label: 'list_agent_runtimes', value: 'list_agent_runtimes' }
    ]}
>
<TabItem value="get_agent_runtime">

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
    <td><CopyableCode code="agent_runtime_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the AgentCore Runtime. (pattern: &lt;code&gt;arn:(-&#91;^:&#93;+)?:bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:agent/&#91;A-Fa-f0-9&#93;&#123;8&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;12&#125;:(&#91;0-9&#93;&#123;0,4&#125;&#91;1-9&#93;&#91;0-9&#93;&#123;0,4&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agent_runtime_artifact" /></td>
    <td><code>object</code></td>
    <td>The artifact of the agent.</td>
</tr>
<tr>
    <td><CopyableCode code="agent_runtime_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the AgentCore Runtime. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,99&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agent_runtime_name" /></td>
    <td><code>string</code></td>
    <td>The name of the AgentCore Runtime. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agent_runtime_version" /></td>
    <td><code>string</code></td>
    <td>The version of the AgentCore Runtime. (pattern: &lt;code&gt;(&#91;1-9&#93;&#91;0-9&#93;&#123;0,4&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="authorizer_configuration" /></td>
    <td><code>object</code></td>
    <td>Represents inbound authorization configuration options used to authenticate incoming requests.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the AgentCore Runtime was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the AgentCore Runtime.</td>
</tr>
<tr>
    <td><CopyableCode code="environment_variables" /></td>
    <td><code>object</code></td>
    <td>Environment variables set in the AgentCore Runtime environment.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for failure if the AgentCore Runtime is in a failed state.</td>
</tr>
<tr>
    <td><CopyableCode code="filesystem_configurations" /></td>
    <td><code>array</code></td>
    <td>The filesystem configurations mounted into the AgentCore Runtime.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the AgentCore Runtime was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycle_configuration" /></td>
    <td><code>object</code></td>
    <td>LifecycleConfiguration lets you manage the lifecycle of runtime sessions and resources in AgentCore Runtime. This configuration helps optimize resource utilization by automatically cleaning up idle sessions and preventing long-running instances from consuming resources indefinitely.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata_configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration for microVM Metadata Service (MMDS) settings for the AgentCore Runtime.</td>
</tr>
<tr>
    <td><CopyableCode code="network_configuration" /></td>
    <td><code>object</code></td>
    <td>SecurityConfig for the Agent.</td>
</tr>
<tr>
    <td><CopyableCode code="protocol_configuration" /></td>
    <td><code>object</code></td>
    <td>The protocol configuration for an agent runtime. This structure defines how the agent runtime communicates with clients.</td>
</tr>
<tr>
    <td><CopyableCode code="request_header_configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration for HTTP request headers that will be passed through to the runtime.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The IAM role ARN that provides permissions for the AgentCore Runtime. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::(&#91;0-9&#93;&#123;12&#125;)?:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the AgentCore Runtime. (CREATING, CREATE_FAILED, UPDATING, UPDATE_FAILED, READY, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="workload_identity_details" /></td>
    <td><code>object</code></td>
    <td>The information about the workload identity.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_agent_runtimes">

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
    <td><CopyableCode code="agent_runtime_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the agent runtime. (pattern: &lt;code&gt;arn:(-&#91;^:&#93;+)?:bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:agent/&#91;A-Fa-f0-9&#93;&#123;8&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;12&#125;:(&#91;0-9&#93;&#123;0,4&#125;&#91;1-9&#93;&#91;0-9&#93;&#123;0,4&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agent_runtime_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the agent runtime. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,99&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agent_runtime_name" /></td>
    <td><code>string</code></td>
    <td>The name of the agent runtime. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agent_runtime_version" /></td>
    <td><code>string</code></td>
    <td>The version of the agent runtime. (pattern: &lt;code&gt;(&#91;1-9&#93;&#91;0-9&#93;&#123;0,4&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the agent runtime.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the agent runtime was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the agent runtime. (CREATING, CREATE_FAILED, UPDATING, UPDATE_FAILED, READY, DELETING)</td>
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
    <td><a href="#get_agent_runtime"><CopyableCode code="get_agent_runtime" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_runtime_id"><code>agent_runtime_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-version"><code>version</code></a></td>
    <td>Gets an Amazon Bedrock AgentCore Runtime.</td>
</tr>
<tr>
    <td><a href="#list_agent_runtimes"><CopyableCode code="list_agent_runtimes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all Amazon Secure Agents in your account.</td>
</tr>
<tr>
    <td><a href="#create_agent_runtime"><CopyableCode code="create_agent_runtime" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-agentRuntimeName"><code>agentRuntimeName</code></a>, <a href="#parameter-agentRuntimeArtifact"><code>agentRuntimeArtifact</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a>, <a href="#parameter-networkConfiguration"><code>networkConfiguration</code></a></td>
    <td></td>
    <td>Creates an Amazon Bedrock AgentCore Runtime.</td>
</tr>
<tr>
    <td><a href="#update_agent_runtime"><CopyableCode code="update_agent_runtime" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-agent_runtime_id"><code>agent_runtime_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-agentRuntimeArtifact"><code>agentRuntimeArtifact</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a>, <a href="#parameter-networkConfiguration"><code>networkConfiguration</code></a></td>
    <td></td>
    <td>Updates an existing Amazon Secure Agent.</td>
</tr>
<tr>
    <td><a href="#delete_agent_runtime"><CopyableCode code="delete_agent_runtime" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-agent_runtime_id"><code>agent_runtime_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Deletes an Amazon Bedrock AgentCore Runtime.</td>
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
<tr id="parameter-agent_runtime_id">
    <td><CopyableCode code="agent_runtime_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the AgentCore Runtime to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, the service ignores the request but does not return an error.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token to retrieve the next page of results.</td>
</tr>
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the AgentCore Runtime to retrieve.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_agent_runtime"
    values={[
        { label: 'get_agent_runtime', value: 'get_agent_runtime' },
        { label: 'list_agent_runtimes', value: 'list_agent_runtimes' }
    ]}
>
<TabItem value="get_agent_runtime">

Gets an Amazon Bedrock AgentCore Runtime.

```sql
SELECT
agent_runtime_arn,
agent_runtime_artifact,
agent_runtime_id,
agent_runtime_name,
agent_runtime_version,
authorizer_configuration,
created_at,
description,
environment_variables,
failure_reason,
filesystem_configurations,
last_updated_at,
lifecycle_configuration,
metadata_configuration,
network_configuration,
protocol_configuration,
request_header_configuration,
role_arn,
status,
workload_identity_details
FROM aws.bedrock_agentcore_control.agent_runtimes
WHERE agent_runtime_id = '{{ agent_runtime_id }}' -- required
AND region = '{{ region }}' -- required
AND version = '{{ version }}'
;
```
</TabItem>
<TabItem value="list_agent_runtimes">

Lists all Amazon Secure Agents in your account.

```sql
SELECT
agent_runtime_arn,
agent_runtime_id,
agent_runtime_name,
agent_runtime_version,
description,
last_updated_at,
status
FROM aws.bedrock_agentcore_control.agent_runtimes
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_agent_runtime"
    values={[
        { label: 'create_agent_runtime', value: 'create_agent_runtime' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_agent_runtime">

Creates an Amazon Bedrock AgentCore Runtime.

```sql
INSERT INTO aws.bedrock_agentcore_control.agent_runtimes (
agentRuntimeName,
agentRuntimeArtifact,
roleArn,
networkConfiguration,
clientToken,
description,
authorizerConfiguration,
requestHeaderConfiguration,
protocolConfiguration,
lifecycleConfiguration,
environmentVariables,
filesystemConfigurations,
tags,
region
)
SELECT 
'{{ agentRuntimeName }}' /* required */,
'{{ agentRuntimeArtifact }}' /* required */,
'{{ roleArn }}' /* required */,
'{{ networkConfiguration }}' /* required */,
'{{ clientToken }}',
'{{ description }}',
'{{ authorizerConfiguration }}',
'{{ requestHeaderConfiguration }}',
'{{ protocolConfiguration }}',
'{{ lifecycleConfiguration }}',
'{{ environmentVariables }}',
'{{ filesystemConfigurations }}',
'{{ tags }}',
'{{ region }}'
RETURNING
agent_runtime_arn,
agent_runtime_id,
agent_runtime_version,
created_at,
status,
workload_identity_details
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: agent_runtimes
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the agent_runtimes resource.
    - name: agentRuntimeName
      value: "{{ agentRuntimeName }}"
    - name: agentRuntimeArtifact
      description: |
        The artifact of the agent.
      value:
        containerConfiguration:
          containerUri: "{{ containerUri }}"
        codeConfiguration:
          code:
            s3:
              bucket: "{{ bucket }}"
              prefix: "{{ prefix }}"
              versionId: "{{ versionId }}"
          runtime: "{{ runtime }}"
          entryPoint:
            - "{{ entryPoint }}"
    - name: roleArn
      value: "{{ roleArn }}"
    - name: networkConfiguration
      description: |
        SecurityConfig for the Agent.
      value:
        networkMode: "{{ networkMode }}"
        networkModeConfig:
          securityGroups:
            - "{{ securityGroups }}"
          subnets:
            - "{{ subnets }}"
          requireServiceS3Endpoint: {{ requireServiceS3Endpoint }}
    - name: clientToken
      value: "{{ clientToken }}"
    - name: description
      value: "{{ description }}"
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
    - name: requestHeaderConfiguration
      description: |
        Configuration for HTTP request headers that will be passed through to the runtime.
      value:
        requestHeaderAllowlist:
          - "{{ requestHeaderAllowlist }}"
    - name: protocolConfiguration
      description: |
        The protocol configuration for an agent runtime. This structure defines how the agent runtime communicates with clients.
      value:
        serverProtocol: "{{ serverProtocol }}"
    - name: lifecycleConfiguration
      description: |
        LifecycleConfiguration lets you manage the lifecycle of runtime sessions and resources in AgentCore Runtime. This configuration helps optimize resource utilization by automatically cleaning up idle sessions and preventing long-running instances from consuming resources indefinitely.
      value:
        idleRuntimeSessionTimeout: {{ idleRuntimeSessionTimeout }}
        maxLifetime: {{ maxLifetime }}
    - name: environmentVariables
      value: "{{ environmentVariables }}"
    - name: filesystemConfigurations
      value:
        - sessionStorage:
            mountPath: "{{ mountPath }}"
          s3FilesAccessPoint:
            accessPointArn: "{{ accessPointArn }}"
            mountPath: "{{ mountPath }}"
          efsAccessPoint:
            accessPointArn: "{{ accessPointArn }}"
            mountPath: "{{ mountPath }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_agent_runtime"
    values={[
        { label: 'update_agent_runtime', value: 'update_agent_runtime' }
    ]}
>
<TabItem value="update_agent_runtime">

Updates an existing Amazon Secure Agent.

```sql
UPDATE aws.bedrock_agentcore_control.agent_runtimes
SET 
agentRuntimeArtifact = '{{ agentRuntimeArtifact }}',
roleArn = '{{ roleArn }}',
networkConfiguration = '{{ networkConfiguration }}',
description = '{{ description }}',
authorizerConfiguration = '{{ authorizerConfiguration }}',
requestHeaderConfiguration = '{{ requestHeaderConfiguration }}',
protocolConfiguration = '{{ protocolConfiguration }}',
lifecycleConfiguration = '{{ lifecycleConfiguration }}',
metadataConfiguration = '{{ metadataConfiguration }}',
environmentVariables = '{{ environmentVariables }}',
filesystemConfigurations = '{{ filesystemConfigurations }}',
clientToken = '{{ clientToken }}'
WHERE 
agent_runtime_id = '{{ agent_runtime_id }}' --required
AND region = '{{ region }}' --required
AND agentRuntimeArtifact = '{{ agentRuntimeArtifact }}' --required
AND roleArn = '{{ roleArn }}' --required
AND networkConfiguration = '{{ networkConfiguration }}' --required
RETURNING
agent_runtime_arn,
agent_runtime_id,
agent_runtime_version,
created_at,
last_updated_at,
status,
workload_identity_details;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_agent_runtime"
    values={[
        { label: 'delete_agent_runtime', value: 'delete_agent_runtime' }
    ]}
>
<TabItem value="delete_agent_runtime">

Deletes an Amazon Bedrock AgentCore Runtime.

```sql
DELETE FROM aws.bedrock_agentcore_control.agent_runtimes
WHERE agent_runtime_id = '{{ agent_runtime_id }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>

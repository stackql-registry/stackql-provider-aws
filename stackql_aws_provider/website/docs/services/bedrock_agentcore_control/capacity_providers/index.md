--- 
title: capacity_providers
hide_title: false
hide_table_of_contents: false
keywords:
  - capacity_providers
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

Creates, updates, deletes, gets or lists a <code>capacity_providers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="capacity_providers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore_control.capacity_providers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_capacity_provider"
    values={[
        { label: 'get_capacity_provider', value: 'get_capacity_provider' },
        { label: 'list_capacity_providers', value: 'list_capacity_providers' }
    ]}
>
<TabItem value="get_capacity_provider">

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
    <td>The name of the capacity provider. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="capacity_provider_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the capacity provider. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:capacity-provider/&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="capacity_provider_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the capacity provider. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="compute_configuration" /></td>
    <td><code>object</code></td>
    <td>The compute configuration for a capacity provider. This structure defines the type and settings of the compute resources used to launch instances.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the capacity provider was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the capacity provider, if one was provided.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the capacity provider was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="permissions_configuration" /></td>
    <td><code>object</code></td>
    <td>The permissions configuration for a capacity provider. This specifies the IAM role that AgentCore uses to manage the Amazon EC2 instances for the capacity provider on your behalf.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the capacity provider. For possible values, see CapacityProviderStatus. (CREATING, CREATE_FAILED, UPDATING, UPDATE_FAILED, READY, DELETING, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_code" /></td>
    <td><code>string</code></td>
    <td>A reason code for a capacity provider that is not in the READY state. Use this code for programmatic error handling. (VALIDATION_ERROR, QUOTA_EXCEEDED, THROTTLED, INTERNAL_SERVER_EXCEPTION)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>A human-readable message that describes why the capacity provider is not in the READY state. Because these messages can change, use statusCode for programmatic error handling.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_capacity_providers">

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
    <td>The name of the capacity provider. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="capacity_provider_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the capacity provider. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:capacity-provider/&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="capacity_provider_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the capacity provider. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the capacity provider was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the capacity provider. For possible values, see CapacityProviderStatus. (CREATING, CREATE_FAILED, UPDATING, UPDATE_FAILED, READY, DELETING, DELETE_FAILED)</td>
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
    <td><a href="#get_capacity_provider"><CopyableCode code="get_capacity_provider" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-capacity_provider_id"><code>capacity_provider_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a capacity provider, including its status, permissions configuration, and compute configuration.</td>
</tr>
<tr>
    <td><a href="#list_capacity_providers"><CopyableCode code="list_capacity_providers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the capacity providers in your account and returns summary information for each one. To retrieve the full configuration for a specific capacity provider, use GetCapacityProvider. Results are paginated; use the nextToken parameter to retrieve additional results.</td>
</tr>
<tr>
    <td><a href="#create_capacity_provider"><CopyableCode code="create_capacity_provider" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-permissionsConfiguration"><code>permissionsConfiguration</code></a>, <a href="#parameter-computeConfiguration"><code>computeConfiguration</code></a></td>
    <td></td>
    <td>Creates a capacity provider. A capacity provider defines the Amazon EC2 infrastructure for AgentCore Runtime, including the operating system, allowed instance types, networking, and storage. It also specifies the IAM permissions that AgentCore uses to manage those instances. The capacity provider name must be unique within your account. After you create the capacity provider, it enters a CREATING state and transitions to READY when it is available for use.</td>
</tr>
<tr>
    <td><a href="#update_capacity_provider"><CopyableCode code="update_capacity_provider" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-capacity_provider_id"><code>capacity_provider_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a capacity provider. Only the description can be changed. To change other configuration, such as instance types, networking, or storage, create a new capacity provider.</td>
</tr>
<tr>
    <td><a href="#delete_capacity_provider"><CopyableCode code="delete_capacity_provider" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-capacity_provider_id"><code>capacity_provider_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Deletes a capacity provider. Before you delete a capacity provider, disassociate all agent runtimes and runtime versions that reference it. If any references remain, the operation fails.</td>
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
<tr id="parameter-capacity_provider_id">
    <td><CopyableCode code="capacity_provider_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the capacity provider to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see Ensuring idempotency.</td>
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
    defaultValue="get_capacity_provider"
    values={[
        { label: 'get_capacity_provider', value: 'get_capacity_provider' },
        { label: 'list_capacity_providers', value: 'list_capacity_providers' }
    ]}
>
<TabItem value="get_capacity_provider">

Retrieves information about a capacity provider, including its status, permissions configuration, and compute configuration.

```sql
SELECT
name,
capacity_provider_arn,
capacity_provider_id,
compute_configuration,
created_at,
description,
last_updated_at,
permissions_configuration,
status,
status_code,
status_reason
FROM aws.bedrock_agentcore_control.capacity_providers
WHERE capacity_provider_id = '{{ capacity_provider_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_capacity_providers">

Lists the capacity providers in your account and returns summary information for each one. To retrieve the full configuration for a specific capacity provider, use GetCapacityProvider. Results are paginated; use the nextToken parameter to retrieve additional results.

```sql
SELECT
name,
capacity_provider_arn,
capacity_provider_id,
last_updated_at,
status
FROM aws.bedrock_agentcore_control.capacity_providers
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_capacity_provider"
    values={[
        { label: 'create_capacity_provider', value: 'create_capacity_provider' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_capacity_provider">

Creates a capacity provider. A capacity provider defines the Amazon EC2 infrastructure for AgentCore Runtime, including the operating system, allowed instance types, networking, and storage. It also specifies the IAM permissions that AgentCore uses to manage those instances. The capacity provider name must be unique within your account. After you create the capacity provider, it enters a CREATING state and transitions to READY when it is available for use.

```sql
INSERT INTO aws.bedrock_agentcore_control.capacity_providers (
name,
description,
permissionsConfiguration,
clientToken,
tags,
computeConfiguration,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ permissionsConfiguration }}' /* required */,
'{{ clientToken }}',
'{{ tags }}',
'{{ computeConfiguration }}' /* required */,
'{{ region }}'
RETURNING
name,
capacity_provider_arn,
capacity_provider_id,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: capacity_providers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the capacity_providers resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: permissionsConfiguration
      description: |
        The permissions configuration for a capacity provider. This specifies the IAM role that AgentCore uses to manage the Amazon EC2 instances for the capacity provider on your behalf.
      value:
        capacityProviderOperatorRoleArn: "{{ capacityProviderOperatorRoleArn }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value: "{{ tags }}"
    - name: computeConfiguration
      description: |
        The compute configuration for a capacity provider. This structure defines the type and settings of the compute resources used to launch instances.
      value:
        ec2Configuration:
          launchTemplateSource:
            launchParameters:
              operatingSystem: "{{ operatingSystem }}"
              instanceRequirements:
                allowedInstanceTypes: "{{ allowedInstanceTypes }}"
              ephemeralVolumes:
                - deviceName: "{{ deviceName }}"
                  virtualName: "{{ virtualName }}"
                  ebs:
                    volumeType: "{{ volumeType }}"
                    iops: {{ iops }}
                    throughput: {{ throughput }}
                    encrypted: {{ encrypted }}
                    kmsKeyId: "{{ kmsKeyId }}"
                    snapshotId: "{{ snapshotId }}"
                    volumeSize: {{ volumeSize }}
                    volumeInitializationRate: {{ volumeInitializationRate }}
                    ebsCardIndex: {{ ebsCardIndex }}
              monitoring: "{{ monitoring }}"
              licenseSpecifications:
                - licenseConfigurationArn: "{{ licenseConfigurationArn }}"
              capacityReservationSpecification:
                capacityReservationPreference: "{{ capacityReservationPreference }}"
                capacityReservationTarget: "{{ capacityReservationTarget }}"
              sshKeyName: "{{ sshKeyName }}"
              instanceProfileArn: "{{ instanceProfileArn }}"
              propagatedTags: "{{ propagatedTags }}"
          vpcConfiguration:
            subnets:
              - "{{ subnets }}"
            securityGroups:
              - "{{ securityGroups }}"
          volumes:
            - ebsConfiguration:
                name: "{{ name }}"
                sizeGiB: {{ sizeGiB }}
                volumeType: "{{ volumeType }}"
                iops: {{ iops }}
                throughput: {{ throughput }}
                encrypted: {{ encrypted }}
                kmsKeyId: "{{ kmsKeyId }}"
                snapshotId: "{{ snapshotId }}"
          lifecycleConfiguration:
            idleInstanceTimeout: {{ idleInstanceTimeout }}
            maxLifetime: {{ maxLifetime }}
          rootVolume:
            volumeType: "{{ volumeType }}"
            iops: {{ iops }}
            throughput: {{ throughput }}
            encrypted: {{ encrypted }}
            kmsKeyId: "{{ kmsKeyId }}"
            freeSpaceGiB: {{ freeSpaceGiB }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_capacity_provider"
    values={[
        { label: 'update_capacity_provider', value: 'update_capacity_provider' }
    ]}
>
<TabItem value="update_capacity_provider">

Updates a capacity provider. Only the description can be changed. To change other configuration, such as instance types, networking, or storage, create a new capacity provider.

```sql
UPDATE aws.bedrock_agentcore_control.capacity_providers
SET 
description = '{{ description }}',
clientToken = '{{ clientToken }}'
WHERE 
capacity_provider_id = '{{ capacity_provider_id }}' --required
AND region = '{{ region }}' --required
RETURNING
name,
capacity_provider_arn,
capacity_provider_id,
created_at,
last_updated_at,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_capacity_provider"
    values={[
        { label: 'delete_capacity_provider', value: 'delete_capacity_provider' }
    ]}
>
<TabItem value="delete_capacity_provider">

Deletes a capacity provider. Before you delete a capacity provider, disassociate all agent runtimes and runtime versions that reference it. If any references remain, the operation fails.

```sql
DELETE FROM aws.bedrock_agentcore_control.capacity_providers
WHERE capacity_provider_id = '{{ capacity_provider_id }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>

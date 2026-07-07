--- 
title: agents
hide_title: false
hide_table_of_contents: false
keywords:
  - agents
  - datasync
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

Creates, updates, deletes, gets or lists an <code>agents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datasync.agents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_agent"
    values={[
        { label: 'describe_agent', value: 'describe_agent' },
        { label: 'list_agents', value: 'list_agents' }
    ]}
>
<TabItem value="describe_agent">

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
    <td><CopyableCode code="AgentArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the agent. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov|aws-eusc|aws-iso|aws-iso-b):datasync:&#91;a-z\-0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:agent/agent-&#91;0-9a-z&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the agent was activated.</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointType" /></td>
    <td><code>string</code></td>
    <td>The type of service endpoint that your agent is connected to. (PUBLIC, PRIVATE_LINK, FIPS, FIPS_PRIVATE_LINK)</td>
</tr>
<tr>
    <td><CopyableCode code="LastConnectionTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time that the agent was communicating with the DataSync service.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the agent. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\s+=._:@/-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Platform" /></td>
    <td><code>object</code></td>
    <td>The platform-related details about the agent, such as the version number.</td>
</tr>
<tr>
    <td><CopyableCode code="PrivateLinkConfig" /></td>
    <td><code>object</code></td>
    <td>The network configuration that the agent uses when connecting to a VPC service endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the agent. If the status is ONLINE, the agent is configured properly and ready to use. If the status is OFFLINE, the agent has been out of contact with DataSync for five minutes or longer. This can happen for a few reasons. For more information, see What do I do if my agent is offline? (ONLINE, OFFLINE)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_agents">

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
    <td><CopyableCode code="AgentArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of a DataSync agent. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov|aws-eusc|aws-iso|aws-iso-b):datasync:&#91;a-z\-0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:agent/agent-&#91;0-9a-z&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of an agent. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\s+=._:@/-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Platform" /></td>
    <td><code>object</code></td>
    <td>The platform-related details about the agent, such as the version number.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of an agent. If the status is ONLINE, the agent is configured properly and ready to use. If the status is OFFLINE, the agent has been out of contact with DataSync for five minutes or longer. This can happen for a few reasons. For more information, see What do I do if my agent is offline? (ONLINE, OFFLINE)</td>
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
    <td><a href="#describe_agent"><CopyableCode code="describe_agent" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about an DataSync agent, such as its name, service endpoint type, and status.</td>
</tr>
<tr>
    <td><a href="#list_agents"><CopyableCode code="list_agents" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of DataSync agents that belong to an Amazon Web Services account in the Amazon Web Services Region specified in the request. With pagination, you can reduce the number of agents returned in a response. If you get a truncated list of agents in a response, the response contains a marker that you can specify in your next request to fetch the next page of agents. ListAgents is eventually consistent. This means the result of running the operation might not reflect that you just created or deleted an agent. For example, if you create an agent with CreateAgent and then immediately run ListAgents, that agent might not show up in the list right away. In situations like this, you can always confirm whether an agent has been created (or deleted) by using DescribeAgent.</td>
</tr>
<tr>
    <td><a href="#create_agent"><CopyableCode code="create_agent" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ActivationKey"><code>ActivationKey</code></a></td>
    <td></td>
    <td>Activates an DataSync agent that you deploy in your storage environment. The activation process associates the agent with your Amazon Web Services account. If you haven't deployed an agent yet, see Do I need a DataSync agent?</td>
</tr>
<tr>
    <td><a href="#update_agent"><CopyableCode code="update_agent" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AgentArn"><code>AgentArn</code></a></td>
    <td></td>
    <td>Updates the name of an DataSync agent.</td>
</tr>
<tr>
    <td><a href="#delete_agent"><CopyableCode code="delete_agent" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes an DataSync agent resource from your Amazon Web Services account. Keep in mind that this operation (which can't be undone) doesn't remove the agent's virtual machine (VM) or Amazon EC2 instance from your storage environment. For next steps, you can delete the VM or instance from your storage environment or reuse it to activate a new agent.</td>
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
    defaultValue="describe_agent"
    values={[
        { label: 'describe_agent', value: 'describe_agent' },
        { label: 'list_agents', value: 'list_agents' }
    ]}
>
<TabItem value="describe_agent">

Returns information about an DataSync agent, such as its name, service endpoint type, and status.

```sql
SELECT
AgentArn,
CreationTime,
EndpointType,
LastConnectionTime,
Name,
Platform,
PrivateLinkConfig,
Status
FROM aws.datasync.agents
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_agents">

Returns a list of DataSync agents that belong to an Amazon Web Services account in the Amazon Web Services Region specified in the request. With pagination, you can reduce the number of agents returned in a response. If you get a truncated list of agents in a response, the response contains a marker that you can specify in your next request to fetch the next page of agents. ListAgents is eventually consistent. This means the result of running the operation might not reflect that you just created or deleted an agent. For example, if you create an agent with CreateAgent and then immediately run ListAgents, that agent might not show up in the list right away. In situations like this, you can always confirm whether an agent has been created (or deleted) by using DescribeAgent.

```sql
SELECT
AgentArn,
Name,
Platform,
Status
FROM aws.datasync.agents
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_agent"
    values={[
        { label: 'create_agent', value: 'create_agent' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_agent">

Activates an DataSync agent that you deploy in your storage environment. The activation process associates the agent with your Amazon Web Services account. If you haven't deployed an agent yet, see Do I need a DataSync agent?

```sql
INSERT INTO aws.datasync.agents (
ActivationKey,
AgentName,
Tags,
VpcEndpointId,
SubnetArns,
SecurityGroupArns,
region
)
SELECT 
'{{ ActivationKey }}' /* required */,
'{{ AgentName }}',
'{{ Tags }}',
'{{ VpcEndpointId }}',
'{{ SubnetArns }}',
'{{ SecurityGroupArns }}',
'{{ region }}'
RETURNING
AgentArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: agents
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the agents resource.
    - name: ActivationKey
      value: "{{ ActivationKey }}"
      description: |
        Specifies your DataSync agent's activation key. If you don't have an activation key, see Activating your agent.
    - name: AgentName
      value: "{{ AgentName }}"
      description: |
        Specifies a name for your agent. We recommend specifying a name that you can remember.
    - name: Tags
      description: |
        Specifies labels that help you categorize, filter, and search for your Amazon Web Services resources. We recommend creating at least one tag for your agent.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: VpcEndpointId
      value: "{{ VpcEndpointId }}"
      description: |
        Specifies the ID of the VPC service endpoint that you're using. For example, a VPC endpoint ID looks like vpce-01234d5aff67890e1. The VPC service endpoint you use must include the DataSync service name (for example, com.amazonaws.us-east-2.datasync).
    - name: SubnetArns
      value:
        - "{{ SubnetArns }}"
      description: |
        Specifies the ARN of the subnet where your VPC service endpoint is located. You can only specify one ARN.
    - name: SecurityGroupArns
      value:
        - "{{ SecurityGroupArns }}"
      description: |
        Specifies the Amazon Resource Name (ARN) of the security group that allows traffic between your agent and VPC service endpoint. You can only specify one ARN.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_agent"
    values={[
        { label: 'update_agent', value: 'update_agent' }
    ]}
>
<TabItem value="update_agent">

Updates the name of an DataSync agent.

```sql
UPDATE aws.datasync.agents
SET 
AgentArn = '{{ AgentArn }}',
Name = '{{ Name }}'
WHERE 
region = '{{ region }}' --required
AND AgentArn = '{{ AgentArn }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_agent"
    values={[
        { label: 'delete_agent', value: 'delete_agent' }
    ]}
>
<TabItem value="delete_agent">

Removes an DataSync agent resource from your Amazon Web Services account. Keep in mind that this operation (which can't be undone) doesn't remove the agent's virtual machine (VM) or Amazon EC2 instance from your storage environment. For next steps, you can delete the VM or instance from your storage environment or reuse it to activate a new agent.

```sql
DELETE FROM aws.datasync.agents
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

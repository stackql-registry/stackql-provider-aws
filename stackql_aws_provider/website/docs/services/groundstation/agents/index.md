--- 
title: agents
hide_title: false
hide_table_of_contents: false
keywords:
  - agents
  - groundstation
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.groundstation.agents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#register_agent"><CopyableCode code="register_agent" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-discoveryData"><code>discoveryData</code></a>, <a href="#parameter-agentDetails"><code>agentDetails</code></a></td>
    <td></td>
    <td>For use by AWS Ground Station Agent and shouldn't be called directly. Registers a new agent with AWS Ground Station.</td>
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

## `INSERT` examples

<Tabs
    defaultValue="register_agent"
    values={[
        { label: 'register_agent', value: 'register_agent' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_agent">

For use by AWS Ground Station Agent and shouldn't be called directly. Registers a new agent with AWS Ground Station.

```sql
INSERT INTO aws.groundstation.agents (
discoveryData,
agentDetails,
tags,
region
)
SELECT 
'{{ discoveryData }}' /* required */,
'{{ agentDetails }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
agent_id
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
    - name: discoveryData
      description: |
        Data for agent discovery.
      value:
        publicIpAddresses:
          - "{{ publicIpAddresses }}"
        privateIpAddresses:
          - "{{ privateIpAddresses }}"
        capabilityArns:
          - "{{ capabilityArns }}"
    - name: agentDetails
      description: |
        Detailed information about the agent.
      value:
        agentVersion: "{{ agentVersion }}"
        instanceId: "{{ instanceId }}"
        instanceType: "{{ instanceType }}"
        reservedCpuCores:
          - {{ reservedCpuCores }}
        agentCpuCores:
          - {{ agentCpuCores }}
        componentVersions:
          - componentType: "{{ componentType }}"
            versions: "{{ versions }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>

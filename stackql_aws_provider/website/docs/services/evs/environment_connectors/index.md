--- 
title: environment_connectors
hide_title: false
hide_table_of_contents: false
keywords:
  - environment_connectors
  - evs
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

Creates, updates, deletes, gets or lists an <code>environment_connectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="environment_connectors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.evs.environment_connectors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_environment_connectors"
    values={[
        { label: 'list_environment_connectors', value: 'list_environment_connectors' }
    ]}
>
<TabItem value="list_environment_connectors">

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
    <td><CopyableCode code="applianceFqdn" /></td>
    <td><code>string</code></td>
    <td>The fully qualified domain name (FQDN) of the VCF appliance that the connector connects to. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(&#91;a-zA-Z0-9-&#93;&#123;0,61&#125;&#91;a-zA-Z0-9&#93;)?(\.&#91;a-zA-Z0-9&#93;(&#91;a-zA-Z0-9-&#93;&#123;0,61&#125;&#91;a-zA-Z0-9&#93;)?)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="checks" /></td>
    <td><code>array</code></td>
    <td>A list of checks that are run on the connector.</td>
</tr>
<tr>
    <td><CopyableCode code="connectorId" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the connector. (pattern: &lt;code&gt;(cnctr-&#91;a-zA-Z0-9&#93;&#123;10&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the connector was created.</td>
</tr>
<tr>
    <td><CopyableCode code="environmentId" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the environment that the connector belongs to. (pattern: &lt;code&gt;(env-&#91;a-zA-Z0-9&#93;&#123;10&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the connector was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="secretArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret that stores the credentials for the VCF appliance. (pattern: &lt;code&gt;(arn:aws:secretsmanager:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:secret:&#91;a-zA-Z0-9/_+=.@!-&#93;+|&#91;a-zA-Z0-9/_+=.@!-&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the connector. (CREATING, CREATE_FAILED, ACTIVE, UPDATING, UPDATE_FAILED, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="stateDetails" /></td>
    <td><code>string</code></td>
    <td>A detailed description of the connector state.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the connector. (PASSED, FAILED, UNKNOWN)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the connector. (VCENTER)</td>
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
    <td><a href="#list_environment_connectors"><CopyableCode code="list_environment_connectors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the connectors within an environment. Returns the status of each connector and its applicable checks, among other connector details.</td>
</tr>
<tr>
    <td><a href="#create_environment_connector"><CopyableCode code="create_environment_connector" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-environmentId"><code>environmentId</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-applianceFqdn"><code>applianceFqdn</code></a>, <a href="#parameter-secretIdentifier"><code>secretIdentifier</code></a></td>
    <td></td>
    <td>Creates a connector for an Amazon EVS environment. A connector establishes a connection to a VCF appliance, such as vCenter, using a fully qualified domain name and an Amazon Web Services Secrets Manager secret that stores the appliance credentials.</td>
</tr>
<tr>
    <td><a href="#update_environment_connector"><CopyableCode code="update_environment_connector" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-environmentId"><code>environmentId</code></a>, <a href="#parameter-connectorId"><code>connectorId</code></a></td>
    <td></td>
    <td>Updates a connector for an Amazon EVS environment. You can update the Amazon Web Services Secrets Manager secret ARN or the appliance FQDN to reconfigure the connector metadata. You cannot update both the secret and the FQDN in the same request.</td>
</tr>
<tr>
    <td><a href="#delete_environment_connector"><CopyableCode code="delete_environment_connector" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a connector from an Amazon EVS environment. Before deleting a connector, you must remove all entitlements that are associated with the same vCenter.</td>
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
    defaultValue="list_environment_connectors"
    values={[
        { label: 'list_environment_connectors', value: 'list_environment_connectors' }
    ]}
>
<TabItem value="list_environment_connectors">

Lists the connectors within an environment. Returns the status of each connector and its applicable checks, among other connector details.

```sql
SELECT
applianceFqdn,
checks,
connectorId,
createdAt,
environmentId,
modifiedAt,
secretArn,
state,
stateDetails,
status,
type_
FROM aws.evs.environment_connectors
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_environment_connector"
    values={[
        { label: 'create_environment_connector', value: 'create_environment_connector' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_environment_connector">

Creates a connector for an Amazon EVS environment. A connector establishes a connection to a VCF appliance, such as vCenter, using a fully qualified domain name and an Amazon Web Services Secrets Manager secret that stores the appliance credentials.

```sql
INSERT INTO aws.evs.environment_connectors (
clientToken,
environmentId,
type,
applianceFqdn,
secretIdentifier,
region
)
SELECT 
'{{ clientToken }}',
'{{ environmentId }}' /* required */,
'{{ type }}' /* required */,
'{{ applianceFqdn }}' /* required */,
'{{ secretIdentifier }}' /* required */,
'{{ region }}'
RETURNING
connector
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: environment_connectors
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the environment_connectors resource.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        This parameter is not used in Amazon EVS currently. If you supply input for this parameter, it will have no effect. A unique, case-sensitive identifier that you provide to ensure the idempotency of the connector creation request. If you do not specify a client token, a randomly generated token is used for the request to ensure idempotency.
    - name: environmentId
      value: "{{ environmentId }}"
      description: |
        A unique ID for the environment to create the connector in.
    - name: type
      value: "{{ type }}"
      description: |
        The type of connector to create.
      valid_values: ['VCENTER']
    - name: applianceFqdn
      value: "{{ applianceFqdn }}"
      description: |
        The fully qualified domain name (FQDN) of the VCF appliance that the connector targets.
    - name: secretIdentifier
      value: "{{ secretIdentifier }}"
      description: |
        The ARN or name of the Amazon Web Services Secrets Manager secret that stores the credentials for the VCF appliance. Do not use credentials with Administrator privileges. We recommend using a service account with the minimum required permissions.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_environment_connector"
    values={[
        { label: 'update_environment_connector', value: 'update_environment_connector' }
    ]}
>
<TabItem value="update_environment_connector">

Updates a connector for an Amazon EVS environment. You can update the Amazon Web Services Secrets Manager secret ARN or the appliance FQDN to reconfigure the connector metadata. You cannot update both the secret and the FQDN in the same request.

```sql
UPDATE aws.evs.environment_connectors
SET 
clientToken = '{{ clientToken }}',
environmentId = '{{ environmentId }}',
connectorId = '{{ connectorId }}',
applianceFqdn = '{{ applianceFqdn }}',
secretIdentifier = '{{ secretIdentifier }}'
WHERE 
region = '{{ region }}' --required
AND environmentId = '{{ environmentId }}' --required
AND connectorId = '{{ connectorId }}' --required
RETURNING
connector;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_environment_connector"
    values={[
        { label: 'delete_environment_connector', value: 'delete_environment_connector' }
    ]}
>
<TabItem value="delete_environment_connector">

Deletes a connector from an Amazon EVS environment. Before deleting a connector, you must remove all entitlements that are associated with the same vCenter.

```sql
DELETE FROM aws.evs.environment_connectors
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

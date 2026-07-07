--- 
title: challenges
hide_title: false
hide_table_of_contents: false
keywords:
  - challenges
  - pca_connector_scep
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

Creates, updates, deletes, gets or lists a <code>challenges</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="challenges" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pca_connector_scep.challenges" /></td></tr>
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
    <td><a href="#create_challenge"><CopyableCode code="create_challenge" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConnectorArn"><code>ConnectorArn</code></a></td>
    <td></td>
    <td>For general-purpose connectors. Creates a challenge password for the specified connector. The SCEP protocol uses a challenge password to authenticate a request before issuing a certificate from a certificate authority (CA). Your SCEP clients include the challenge password as part of their certificate request to Connector for SCEP. To retrieve the connector Amazon Resource Names (ARNs) for the connectors in your account, call ListConnectors. To create additional challenge passwords for the connector, call CreateChallenge again. We recommend frequently rotating your challenge passwords.</td>
</tr>
<tr>
    <td><a href="#delete_challenge"><CopyableCode code="delete_challenge" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-challenge_arn"><code>challenge_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified Challenge.</td>
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
<tr id="parameter-challenge_arn">
    <td><CopyableCode code="challenge_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the challenge password to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="create_challenge"
    values={[
        { label: 'create_challenge', value: 'create_challenge' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_challenge">

For general-purpose connectors. Creates a challenge password for the specified connector. The SCEP protocol uses a challenge password to authenticate a request before issuing a certificate from a certificate authority (CA). Your SCEP clients include the challenge password as part of their certificate request to Connector for SCEP. To retrieve the connector Amazon Resource Names (ARNs) for the connectors in your account, call ListConnectors. To create additional challenge passwords for the connector, call CreateChallenge again. We recommend frequently rotating your challenge passwords.

```sql
INSERT INTO aws.pca_connector_scep.challenges (
ConnectorArn,
ClientToken,
Tags,
region
)
SELECT 
'{{ ConnectorArn }}' /* required */,
'{{ ClientToken }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
Challenge
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: challenges
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the challenges resource.
    - name: ConnectorArn
      value: "{{ ConnectorArn }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_challenge"
    values={[
        { label: 'delete_challenge', value: 'delete_challenge' }
    ]}
>
<TabItem value="delete_challenge">

Deletes the specified Challenge.

```sql
DELETE FROM aws.pca_connector_scep.challenges
WHERE challenge_arn = '{{ challenge_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

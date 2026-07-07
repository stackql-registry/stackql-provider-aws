--- 
title: connector_destinations
hide_title: false
hide_table_of_contents: false
keywords:
  - connector_destinations
  - iot_managed_integrations
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

Creates, updates, deletes, gets or lists a <code>connector_destinations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connector_destinations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot_managed_integrations.connector_destinations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_connector_destination"
    values={[
        { label: 'get_connector_destination', value: 'get_connector_destination' },
        { label: 'list_connector_destinations', value: 'list_connector_destinations' }
    ]}
>
<TabItem value="get_connector_destination">

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
    <td><CopyableCode code="AuthConfig" /></td>
    <td><code>object</code></td>
    <td>The authentication configuration details for a connector destination, including OAuth settings and other authentication parameters.</td>
</tr>
<tr>
    <td><CopyableCode code="AuthType" /></td>
    <td><code>string</code></td>
    <td>The authentication type used for the connector destination, which determines how credentials and access are managed. (OAUTH)</td>
</tr>
<tr>
    <td><CopyableCode code="CloudConnectorId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the C2C connector. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description of the connector destination. (pattern: &lt;code&gt;&#91;0-9A-Za-z_\- &#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the connector destination. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The display name of the connector destination. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_ &#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OAuthCompleteRedirectUrl" /></td>
    <td><code>string</code></td>
    <td>The URL where users are redirected after completing the OAuth authorization process for the connector destination. (pattern: &lt;code&gt;(http|https):​//.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SecretsManager" /></td>
    <td><code>object</code></td>
    <td>Configuration for AWS Secrets Manager, used to securely store and manage sensitive information for connector destinations.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_connector_destinations">

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
    <td><CopyableCode code="CloudConnectorId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the cloud connector associated with this connector destination. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description of the connector destination. (pattern: &lt;code&gt;&#91;0-9A-Za-z_\- &#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the connector destination. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The display name of the connector destination. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_ &#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_connector_destination"><CopyableCode code="get_connector_destination" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get connector destination details linked to a cloud-to-cloud (C2C) connector.</td>
</tr>
<tr>
    <td><a href="#list_connector_destinations"><CopyableCode code="list_connector_destinations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CloudConnectorId"><code>CloudConnectorId</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Lists all connector destinations, with optional filtering by cloud connector ID.</td>
</tr>
<tr>
    <td><a href="#create_connector_destination"><CopyableCode code="create_connector_destination" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CloudConnectorId"><code>CloudConnectorId</code></a>, <a href="#parameter-AuthConfig"><code>AuthConfig</code></a></td>
    <td></td>
    <td>Create a connector destination for connecting a cloud-to-cloud (C2C) connector to the customer's Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#update_connector_destination"><CopyableCode code="update_connector_destination" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the properties of an existing connector destination.</td>
</tr>
<tr>
    <td><a href="#delete_connector_destination"><CopyableCode code="delete_connector_destination" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a connector destination linked to a cloud-to-cloud (C2C) connector. Deletion can't be done if the account association has used this connector destination.</td>
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
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the connector destination.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-CloudConnectorId">
    <td><CopyableCode code="CloudConnectorId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the cloud connector to filter connector destinations by.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of connector destinations to return in a single response.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token used for pagination of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_connector_destination"
    values={[
        { label: 'get_connector_destination', value: 'get_connector_destination' },
        { label: 'list_connector_destinations', value: 'list_connector_destinations' }
    ]}
>
<TabItem value="get_connector_destination">

Get connector destination details linked to a cloud-to-cloud (C2C) connector.

```sql
SELECT
AuthConfig,
AuthType,
CloudConnectorId,
Description,
Id,
Name,
OAuthCompleteRedirectUrl,
SecretsManager
FROM aws.iot_managed_integrations.connector_destinations
WHERE identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_connector_destinations">

Lists all connector destinations, with optional filtering by cloud connector ID.

```sql
SELECT
CloudConnectorId,
Description,
Id,
Name
FROM aws.iot_managed_integrations.connector_destinations
WHERE region = '{{ region }}' -- required
AND CloudConnectorId = '{{ CloudConnectorId }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_connector_destination"
    values={[
        { label: 'create_connector_destination', value: 'create_connector_destination' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_connector_destination">

Create a connector destination for connecting a cloud-to-cloud (C2C) connector to the customer's Amazon Web Services account.

```sql
INSERT INTO aws.iot_managed_integrations.connector_destinations (
Name,
Description,
CloudConnectorId,
AuthType,
AuthConfig,
SecretsManager,
ClientToken,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ CloudConnectorId }}' /* required */,
'{{ AuthType }}',
'{{ AuthConfig }}' /* required */,
'{{ SecretsManager }}',
'{{ ClientToken }}',
'{{ region }}'
RETURNING
Id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: connector_destinations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the connector_destinations resource.
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
    - name: CloudConnectorId
      value: "{{ CloudConnectorId }}"
    - name: AuthType
      value: "{{ AuthType }}"
      valid_values: ['OAUTH']
    - name: AuthConfig
      description: |
        The authentication configuration details for a connector destination, including OAuth settings and other authentication parameters.
      value:
        oAuth:
          authUrl: "{{ authUrl }}"
          tokenUrl: "{{ tokenUrl }}"
          scope: "{{ scope }}"
          tokenEndpointAuthenticationScheme: "{{ tokenEndpointAuthenticationScheme }}"
          oAuthCompleteRedirectUrl: "{{ oAuthCompleteRedirectUrl }}"
          proactiveRefreshTokenRenewal:
            enabled: {{ enabled }}
            DaysBeforeRenewal: {{ DaysBeforeRenewal }}
        GeneralAuthorization:
          - SecretsManager:
              arn: "{{ arn }}"
              versionId: "{{ versionId }}"
            AuthMaterialName: "{{ AuthMaterialName }}"
    - name: SecretsManager
      description: |
        Configuration for AWS Secrets Manager, used to securely store and manage sensitive information for connector destinations.
      value:
        arn: "{{ arn }}"
        versionId: "{{ versionId }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_connector_destination"
    values={[
        { label: 'update_connector_destination', value: 'update_connector_destination' }
    ]}
>
<TabItem value="update_connector_destination">

Updates the properties of an existing connector destination.

```sql
UPDATE aws.iot_managed_integrations.connector_destinations
SET 
Description = '{{ Description }}',
Name = '{{ Name }}',
AuthType = '{{ AuthType }}',
AuthConfig = '{{ AuthConfig }}',
SecretsManager = '{{ SecretsManager }}'
WHERE 
identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_connector_destination"
    values={[
        { label: 'delete_connector_destination', value: 'delete_connector_destination' }
    ]}
>
<TabItem value="delete_connector_destination">

Delete a connector destination linked to a cloud-to-cloud (C2C) connector. Deletion can't be done if the account association has used this connector destination.

```sql
DELETE FROM aws.iot_managed_integrations.connector_destinations
WHERE identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

--- 
title: connections
hide_title: false
hide_table_of_contents: false
keywords:
  - connections
  - events
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

Creates, updates, deletes, gets or lists a <code>connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.events.connections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_connection"
    values={[
        { label: 'describe_connection', value: 'describe_connection' }
    ]}
>
<TabItem value="describe_connection">

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
    <td><CopyableCode code="auth_parameters" /></td>
    <td><code>object</code></td>
    <td>The parameters to use for authorization for the connection.</td>
</tr>
<tr>
    <td><CopyableCode code="authorization_type" /></td>
    <td><code>string</code></td>
    <td>The type of authorization specified for the connection. (BASIC, OAUTH_CLIENT_CREDENTIALS, API_KEY)</td>
</tr>
<tr>
    <td><CopyableCode code="connection_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the connection retrieved. (pattern: &lt;code&gt;^arn:aws(&#91;a-z&#93;|\-)*:events:(&#91;a-z&#93;|\d|\-)*:(&#91;0-9&#93;&#123;12&#125;)?:connection\/&#91;\.\-_A-Za-z0-9&#93;+\/&#91;\-A-Za-z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="connection_state" /></td>
    <td><code>string</code></td>
    <td>The state of the connection retrieved. (CREATING, UPDATING, DELETING, AUTHORIZED, DEAUTHORIZED, AUTHORIZING, DEAUTHORIZING, ACTIVE, FAILED_CONNECTIVITY)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time stamp for the time that the connection was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description for the connection retrieved. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="invocation_connectivity_parameters" /></td>
    <td><code>object</code></td>
    <td>For connections to private APIs The parameters EventBridge uses to invoke the resource endpoint. For more information, see Connecting to private APIs in the Amazon EventBridge User Guide .</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the KMS customer managed key for EventBridge to use to encrypt the connection, if one has been specified. For more information, see Encrypting connections in the Amazon EventBridge User Guide. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-/:&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_authorized_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time stamp for the time that the connection was last authorized.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time stamp for the time that the connection was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the connection retrieved. (pattern: &lt;code&gt;&#91;\.\-_A-Za-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="secret_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the secret created from the authorization parameters specified for the connection. (pattern: &lt;code&gt;^arn:aws(&#91;a-z&#93;|\-)*:secretsmanager:(&#91;a-z&#93;|\d|\-)*:(&#91;0-9&#93;&#123;12&#125;)?:secret:&#91;\/_+=\.@\-A-Za-z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state_reason" /></td>
    <td><code>string</code></td>
    <td>The reason that the connection is in the current connection state. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
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
    <td><a href="#describe_connection"><CopyableCode code="describe_connection" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details about a connection.</td>
</tr>
<tr>
    <td><a href="#create_connection"><CopyableCode code="create_connection" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AuthorizationType"><code>AuthorizationType</code></a>, <a href="#parameter-AuthParameters"><code>AuthParameters</code></a></td>
    <td></td>
    <td>Creates a connection. A connection defines the authorization type and credentials to use for authorization with an API destination HTTP endpoint. For more information, see Connections for endpoint targets in the Amazon EventBridge User Guide.</td>
</tr>
<tr>
    <td><a href="#update_connection"><CopyableCode code="update_connection" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates settings for a connection.</td>
</tr>
<tr>
    <td><a href="#delete_connection"><CopyableCode code="delete_connection" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a connection.</td>
</tr>
<tr>
    <td><a href="#list_connections"><CopyableCode code="list_connections" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of connections from the account.</td>
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
    defaultValue="describe_connection"
    values={[
        { label: 'describe_connection', value: 'describe_connection' }
    ]}
>
<TabItem value="describe_connection">

Retrieves details about a connection.

```sql
SELECT
auth_parameters,
authorization_type,
connection_arn,
connection_state,
creation_time,
description,
invocation_connectivity_parameters,
kms_key_identifier,
last_authorized_time,
last_modified_time,
name,
secret_arn,
state_reason
FROM aws.events.connections
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_connection"
    values={[
        { label: 'create_connection', value: 'create_connection' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_connection">

Creates a connection. A connection defines the authorization type and credentials to use for authorization with an API destination HTTP endpoint. For more information, see Connections for endpoint targets in the Amazon EventBridge User Guide.

```sql
INSERT INTO aws.events.connections (
Name,
Description,
AuthorizationType,
AuthParameters,
InvocationConnectivityParameters,
KmsKeyIdentifier,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ AuthorizationType }}' /* required */,
'{{ AuthParameters }}' /* required */,
'{{ InvocationConnectivityParameters }}',
'{{ KmsKeyIdentifier }}',
'{{ region }}'
RETURNING
connection_arn,
connection_state,
creation_time,
last_modified_time
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: connections
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the connections resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name for the connection to create.
    - name: Description
      value: "{{ Description }}"
      description: |
        A description for the connection to create.
    - name: AuthorizationType
      value: "{{ AuthorizationType }}"
      description: |
        The type of authorization to use for the connection. OAUTH tokens are refreshed when a 401 or 407 response is returned.
      valid_values: ['BASIC', 'OAUTH_CLIENT_CREDENTIALS', 'API_KEY']
    - name: AuthParameters
      description: |
        The authorization parameters to use to authorize with the endpoint. You must include only authorization parameters for the AuthorizationType you specify.
      value:
        BasicAuthParameters:
          Username: "{{ Username }}"
          Password: "{{ Password }}"
        OAuthParameters:
          ClientParameters:
            ClientID: "{{ ClientID }}"
            ClientSecret: "{{ ClientSecret }}"
          AuthorizationEndpoint: "{{ AuthorizationEndpoint }}"
          HttpMethod: "{{ HttpMethod }}"
          OAuthHttpParameters:
            HeaderParameters:
              - Key: "{{ Key }}"
                Value: "{{ Value }}"
                IsValueSecret: {{ IsValueSecret }}
            QueryStringParameters:
              - Key: "{{ Key }}"
                Value: "{{ Value }}"
                IsValueSecret: {{ IsValueSecret }}
            BodyParameters:
              - Key: "{{ Key }}"
                Value: "{{ Value }}"
                IsValueSecret: {{ IsValueSecret }}
        ApiKeyAuthParameters:
          ApiKeyName: "{{ ApiKeyName }}"
          ApiKeyValue: "{{ ApiKeyValue }}"
        InvocationHttpParameters:
          HeaderParameters:
            - Key: "{{ Key }}"
              Value: "{{ Value }}"
              IsValueSecret: {{ IsValueSecret }}
          QueryStringParameters:
            - Key: "{{ Key }}"
              Value: "{{ Value }}"
              IsValueSecret: {{ IsValueSecret }}
          BodyParameters:
            - Key: "{{ Key }}"
              Value: "{{ Value }}"
              IsValueSecret: {{ IsValueSecret }}
        ConnectivityParameters:
          ResourceParameters:
            ResourceConfigurationArn: "{{ ResourceConfigurationArn }}"
    - name: InvocationConnectivityParameters
      description: |
        For connections to private APIs, the parameters to use for invoking the API. For more information, see Connecting to private APIs in the Amazon EventBridge User Guide .
      value:
        ResourceParameters:
          ResourceConfigurationArn: "{{ ResourceConfigurationArn }}"
    - name: KmsKeyIdentifier
      value: "{{ KmsKeyIdentifier }}"
      description: |
        The identifier of the KMS customer managed key for EventBridge to use, if you choose to use a customer managed key to encrypt this connection. The identifier can be the key Amazon Resource Name (ARN), KeyId, key alias, or key alias ARN. If you do not specify a customer managed key identifier, EventBridge uses an Amazon Web Services owned key to encrypt the connection. For more information, see Identify and view keys in the Key Management Service Developer Guide.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_connection"
    values={[
        { label: 'update_connection', value: 'update_connection' }
    ]}
>
<TabItem value="update_connection">

Updates settings for a connection.

```sql
UPDATE aws.events.connections
SET 
Name = '{{ Name }}',
Description = '{{ Description }}',
AuthorizationType = '{{ AuthorizationType }}',
AuthParameters = '{{ AuthParameters }}',
InvocationConnectivityParameters = '{{ InvocationConnectivityParameters }}',
KmsKeyIdentifier = '{{ KmsKeyIdentifier }}'
WHERE 
region = '{{ region }}' --required
RETURNING
connection_arn,
connection_state,
creation_time,
last_authorized_time,
last_modified_time;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_connection"
    values={[
        { label: 'delete_connection', value: 'delete_connection' }
    ]}
>
<TabItem value="delete_connection">

Deletes a connection.

```sql
DELETE FROM aws.events.connections
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_connections"
    values={[
        { label: 'list_connections', value: 'list_connections' }
    ]}
>
<TabItem value="list_connections">

Retrieves a list of connections from the account.

```sql
EXEC aws.events.connections.list_connections 
@region='{{ region }}' --required 
@@json=
'{
"NamePrefix": "{{ NamePrefix }}", 
"ConnectionState": "{{ ConnectionState }}", 
"NextToken": "{{ NextToken }}", 
"Limit": {{ Limit }}
}'
;
```
</TabItem>
</Tabs>

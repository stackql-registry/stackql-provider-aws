--- 
title: secret_values
hide_title: false
hide_table_of_contents: false
keywords:
  - secret_values
  - secretsmanager
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

Creates, updates, deletes, gets or lists a <code>secret_values</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="secret_values" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.secretsmanager.secret_values" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_secret_value"
    values={[
        { label: 'get_secret_value', value: 'get_secret_value' },
        { label: 'batch_get_secret_value', value: 'batch_get_secret_value' }
    ]}
>
<TabItem value="get_secret_value">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the secret.</td>
</tr>
<tr>
    <td><CopyableCode code="created_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that this version of the secret was created. If you don't specify which version in VersionId or VersionStage, then Secrets Manager uses the AWSCURRENT version.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The friendly name of the secret.</td>
</tr>
<tr>
    <td><CopyableCode code="secret_binary" /></td>
    <td><code>string (byte)</code></td>
    <td>The decrypted secret value, if the secret value was originally provided as binary data in the form of a byte array. When you retrieve a SecretBinary using the HTTP API, the Python SDK, or the Amazon Web Services CLI, the value is Base64-encoded. Otherwise, it is not encoded. If the secret was created by using the Secrets Manager console, or if the secret value was originally provided as a string, then this field is omitted. The secret value appears in SecretString instead. Sensitive: This field contains sensitive information, so the service does not include it in CloudTrail log entries. If you create your own log entries, you must also avoid logging the information in this field.</td>
</tr>
<tr>
    <td><CopyableCode code="secret_string" /></td>
    <td><code>string</code></td>
    <td>The decrypted secret value, if the secret value was originally provided as a string or through the Secrets Manager console. If this secret was created by using the console, then Secrets Manager stores the information as a JSON structure of key/value pairs. Sensitive: This field contains sensitive information, so the service does not include it in CloudTrail log entries. If you create your own log entries, you must also avoid logging the information in this field.</td>
</tr>
<tr>
    <td><CopyableCode code="version_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of this version of the secret.</td>
</tr>
<tr>
    <td><CopyableCode code="version_stages" /></td>
    <td><code>array</code></td>
    <td>A list of all of the staging labels currently attached to this version of the secret.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="batch_get_secret_value">

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
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>A list of errors Secrets Manager encountered while attempting to retrieve individual secrets.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>Secrets Manager includes this value if there's more output available than what is included in the current response. This can occur even when the response includes no values at all, such as when you ask for a filtered view of a long list. To get the next results, call BatchGetSecretValue again with this value.</td>
</tr>
<tr>
    <td><CopyableCode code="secret_values" /></td>
    <td><code>array</code></td>
    <td>A list of secret values.</td>
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
    <td><a href="#get_secret_value"><CopyableCode code="get_secret_value" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the contents of the encrypted fields SecretString or SecretBinary from the specified version of a secret, whichever contains content. To retrieve the values for a group of secrets, call BatchGetSecretValue. We recommend that you cache your secret values by using client-side caching. Caching secrets improves speed and reduces your costs. For more information, see Cache secrets for your applications. To retrieve the previous version of a secret, use VersionStage and specify AWSPREVIOUS. To revert to the previous version of a secret, call UpdateSecretVersionStage. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail. Required permissions: secretsmanager:GetSecretValue. If the secret is encrypted using a customer-managed key instead of the Amazon Web Services managed key aws/secretsmanager, then you also need kms:Decrypt permissions for that key. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager.</td>
</tr>
<tr>
    <td><a href="#batch_get_secret_value"><CopyableCode code="batch_get_secret_value" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the contents of the encrypted fields SecretString or SecretBinary for up to 20 secrets. To retrieve a single secret, call GetSecretValue. To choose which secrets to retrieve, you can specify a list of secrets by name or ARN, or you can use filters. If Secrets Manager encounters errors such as AccessDeniedException while attempting to retrieve any of the secrets, you can see the errors in Errors in the response. Secrets Manager generates CloudTrail GetSecretValue log entries for each secret you request when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail. Required permissions: secretsmanager:BatchGetSecretValue, and you must have secretsmanager:GetSecretValue for each secret. If you use filters, you must also have secretsmanager:ListSecrets. If the secrets are encrypted using customer-managed keys instead of the Amazon Web Services managed key aws/secretsmanager, then you also need kms:Decrypt permissions for the keys. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager.</td>
</tr>
<tr>
    <td><a href="#put_secret_value"><CopyableCode code="put_secret_value" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SecretId"><code>SecretId</code></a></td>
    <td></td>
    <td>Creates a new version of your secret by creating a new encrypted value and attaching it to the secret. version can contain a new SecretString value or a new SecretBinary value. Do not call PutSecretValue at a sustained rate of more than once every 10 minutes. When you update the secret value, Secrets Manager creates a new version of the secret. Secrets Manager keeps 100 of the most recent versions, but it keeps all secret versions created in the last 24 hours. If you call PutSecretValue more than once every 10 minutes, you will create more versions than Secrets Manager removes, and you will reach the quota for secret versions. You can specify the staging labels to attach to the new version in VersionStages. If you don't include VersionStages, then Secrets Manager automatically moves the staging label AWSCURRENT to this version. If this operation creates the first version for the secret, then Secrets Manager automatically attaches the staging label AWSCURRENT to it. If this operation moves the staging label AWSCURRENT from another version to this version, then Secrets Manager also automatically moves the staging label AWSPREVIOUS to the version that AWSCURRENT was removed from. This operation is idempotent. If you call this operation with a ClientRequestToken that matches an existing version's VersionId, and you specify the same secret data, the operation succeeds but does nothing. However, if the secret data is different, then the operation fails because you can't modify an existing version; you can only create new ones. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters except SecretBinary, SecretString, or RotationToken because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail. Required permissions: secretsmanager:PutSecretValue. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager. When you enter commands in a command shell, there is a risk of the command history being accessed or utilities having access to your command parameters. This is a concern if the command includes the value of a secret. Learn how to Mitigate the risks of using command-line tools to store Secrets Manager secrets.</td>
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
    defaultValue="get_secret_value"
    values={[
        { label: 'get_secret_value', value: 'get_secret_value' },
        { label: 'batch_get_secret_value', value: 'batch_get_secret_value' }
    ]}
>
<TabItem value="get_secret_value">

Retrieves the contents of the encrypted fields SecretString or SecretBinary from the specified version of a secret, whichever contains content. To retrieve the values for a group of secrets, call BatchGetSecretValue. We recommend that you cache your secret values by using client-side caching. Caching secrets improves speed and reduces your costs. For more information, see Cache secrets for your applications. To retrieve the previous version of a secret, use VersionStage and specify AWSPREVIOUS. To revert to the previous version of a secret, call UpdateSecretVersionStage. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail. Required permissions: secretsmanager:GetSecretValue. If the secret is encrypted using a customer-managed key instead of the Amazon Web Services managed key aws/secretsmanager, then you also need kms:Decrypt permissions for that key. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager.

```sql
SELECT
arn,
created_date,
name,
secret_binary,
secret_string,
version_id,
version_stages
FROM aws.secretsmanager.secret_values
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="batch_get_secret_value">

Retrieves the contents of the encrypted fields SecretString or SecretBinary for up to 20 secrets. To retrieve a single secret, call GetSecretValue. To choose which secrets to retrieve, you can specify a list of secrets by name or ARN, or you can use filters. If Secrets Manager encounters errors such as AccessDeniedException while attempting to retrieve any of the secrets, you can see the errors in Errors in the response. Secrets Manager generates CloudTrail GetSecretValue log entries for each secret you request when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail. Required permissions: secretsmanager:BatchGetSecretValue, and you must have secretsmanager:GetSecretValue for each secret. If you use filters, you must also have secretsmanager:ListSecrets. If the secrets are encrypted using customer-managed keys instead of the Amazon Web Services managed key aws/secretsmanager, then you also need kms:Decrypt permissions for the keys. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager.

```sql
SELECT
errors,
next_token,
secret_values
FROM aws.secretsmanager.secret_values
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_secret_value"
    values={[
        { label: 'put_secret_value', value: 'put_secret_value' }
    ]}
>
<TabItem value="put_secret_value">

Creates a new version of your secret by creating a new encrypted value and attaching it to the secret. version can contain a new SecretString value or a new SecretBinary value. Do not call PutSecretValue at a sustained rate of more than once every 10 minutes. When you update the secret value, Secrets Manager creates a new version of the secret. Secrets Manager keeps 100 of the most recent versions, but it keeps all secret versions created in the last 24 hours. If you call PutSecretValue more than once every 10 minutes, you will create more versions than Secrets Manager removes, and you will reach the quota for secret versions. You can specify the staging labels to attach to the new version in VersionStages. If you don't include VersionStages, then Secrets Manager automatically moves the staging label AWSCURRENT to this version. If this operation creates the first version for the secret, then Secrets Manager automatically attaches the staging label AWSCURRENT to it. If this operation moves the staging label AWSCURRENT from another version to this version, then Secrets Manager also automatically moves the staging label AWSPREVIOUS to the version that AWSCURRENT was removed from. This operation is idempotent. If you call this operation with a ClientRequestToken that matches an existing version's VersionId, and you specify the same secret data, the operation succeeds but does nothing. However, if the secret data is different, then the operation fails because you can't modify an existing version; you can only create new ones. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters except SecretBinary, SecretString, or RotationToken because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail. Required permissions: secretsmanager:PutSecretValue. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager. When you enter commands in a command shell, there is a risk of the command history being accessed or utilities having access to your command parameters. This is a concern if the command includes the value of a secret. Learn how to Mitigate the risks of using command-line tools to store Secrets Manager secrets.

```sql
REPLACE aws.secretsmanager.secret_values
SET 
SecretId = '{{ SecretId }}',
ClientRequestToken = '{{ ClientRequestToken }}',
SecretBinary = '{{ SecretBinary }}',
SecretString = '{{ SecretString }}',
VersionStages = '{{ VersionStages }}',
RotationToken = '{{ RotationToken }}'
WHERE 
region = '{{ region }}' --required
AND SecretId = '{{ SecretId }}' --required
RETURNING
arn,
name,
version_id,
version_stages;
```
</TabItem>
</Tabs>
